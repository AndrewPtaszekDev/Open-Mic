from django.http import JsonResponse, HttpResponse
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import WaitlistModel
from .serializers import WaitlistSerializer, AccessSerializer
# Create your views here.
admin_password = "JazzHouse69" # FYI: Change this before putting on github, use .env variables in production

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


# Admin Access:

@api_view(["POST"])
def create_entry_admin(request):
    serializer = AccessSerializer(data=request.data)
    if not serializer.is_valid():
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    if not serializer.data["password"] == admin_password:
        return Response(serializer.errors, status=status.HTTP_401_UNAUTHORIZED)
    
    entry_json = {
        "name": serializer.name,
        "song": serializer.song
    }
    
    create_above = serializer.delOrAdd

    entry_serializer = WaitlistModel(entry_json)
    if not entry_serializer.is_valid():
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    #create entry above here
    entry_serializer.save()
    return Response(status=status.HTTP_201_CREATED)
    

@api_view(["DELETE"])
def delete_entry(request):
    serializer = AccessSerializer(data=request.data)
    if not serializer.is_valid():
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    to_delete = WaitlistModel.objects.filter(song=serializer.delOrAdd)

    if not to_delete.exists():
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    to_delete.delete()
    return Response(status=status.HTTP_200_OK)

@api_view(["PUT"])
def clear_db(request):
    WaitlistModel.objects.all().delete()
    if WaitlistModel.objects.count() > 0:
        return Response(status=status.HTTP_400_BAD_REQUEST)
    return Response(status=status.HTTP_200_OK)

@api_view(["PUT"])
def pop(request):
    if WaitlistModel.objects.count() == 0:
        return Response(status=status.HTTP_400_BAD_REQUEST)
    
    WaitlistModel.objects.all().order_by('order').first().delete()
    return Response(status=status.HTTP_200_OK)

