from django.http import JsonResponse
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import WaitlistModel
from .serializers import WaitlistSerializer
# Create your views here.

@api_view(['POST'])
def create_entry(request):
    if request.method == 'POST':
        serializer = WaitlistSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def get_all_waitlists(request):
    if request.method == 'GET':
        waitlist_data = WaitlistModel.objects.all()

        # Serialize the data into a list of dictionaries
        data = [
            {"name": data_entry.name, "song": data_entry.song}
            for data_entry in waitlist_data
        ]
        # Return the data as a JSON response
        return JsonResponse(data, safe=False, status=status.HTTP_200_OK)