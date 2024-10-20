from django.http import JsonResponse, HttpResponse
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import WaitlistModel
from .serializers import WaitlistSerializer, AccessSerializer
from .utils import get_password
# Create your views here.

@api_view(['POST'])
def create_entry(request):
    serializer = WaitlistSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def get_all_waitlists(request):
    waitlist_data = WaitlistModel.objects.all().order_by('order')
    # Serialize the data into a list of dictionaries
    data = [
        {"name": data_entry.name, "song": data_entry.song}
        for data_entry in waitlist_data
    ]
    # Return the data as a JSON response
    return JsonResponse(data, safe=False, status=status.HTTP_200_OK)

def test(request):
    waitlist = WaitlistModel.objects.all()
    return HttpResponse(waitlist)


# Admin Access --------------------------------------------

@api_view(["POST"])
def create_entry_admin(request):
    serializer = AccessSerializer(data=request.data)
    if not serializer.is_valid():
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    if not serializer.data["password"] == get_password():
        return Response(serializer.errors, status=status.HTTP_401_UNAUTHORIZED)
    
    entry_json = {
        "name": serializer.validated_data.get('name'),
        "song": serializer.validated_data.get('song')
    }
    
    order = WaitlistModel.objects.filter(song=serializer.validated_data['delOrAdd']).first().order
    if order is None:
         return Response({"error": "No matching song found."}, status=status.HTTP_404_NOT_FOUND)
    WaitlistModel.increment_orders_from(order)

    entry_serializer = WaitlistSerializer(data=entry_json, context={'custom_order': order})
    if not entry_serializer.is_valid():
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    entry_serializer.save()
    return Response(status=status.HTTP_201_CREATED)
    

@api_view(["DELETE"])
def delete_entry(request):
    serializer = AccessSerializer(data=request.data)
    if not serializer.is_valid():
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    if not serializer.data["password"] == get_password():
        return Response(serializer.errors, status=status.HTTP_401_UNAUTHORIZED)
    
    to_delete = WaitlistModel.objects.filter(song=serializer.validated_data['delOrAdd']).first()

    if to_delete is None:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    to_delete.delete()
    return Response(status=status.HTTP_200_OK)


@api_view(["PUT"])
def clear_db(request):
    serializer = AccessSerializer(data=request.data)
    if not serializer.is_valid():
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    if not serializer.data["password"] == get_password():
        return Response(serializer.errors, status=status.HTTP_401_UNAUTHORIZED)
    
    WaitlistModel.objects.all().delete()
    if WaitlistModel.objects.count() > 0:
        return Response(status=status.HTTP_400_BAD_REQUEST)
    return Response(status=status.HTTP_200_OK)


@api_view(["PUT"])
def pop(request):
    serializer = AccessSerializer(data=request.data)
    if not serializer.is_valid():
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    if not serializer.data["password"] == get_password():
        return Response(serializer.errors, status=status.HTTP_401_UNAUTHORIZED)
    
    if WaitlistModel.objects.count() == 0:
        return Response(status=status.HTTP_400_BAD_REQUEST)
    
    WaitlistModel.objects.all().order_by('order').first().delete()
    return Response(status=status.HTTP_200_OK)

