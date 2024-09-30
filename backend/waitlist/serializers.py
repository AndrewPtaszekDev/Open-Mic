# serializers.py
from rest_framework import serializers
from .models import WaitlistModel


class WaitlistSerializer(serializers.ModelSerializer):
    class Meta:
        model = WaitlistModel
        fields = '__all__'

class AccessSerializer(serializers.Serializer):
    password = serializers.CharField(max_length = 25)
    name = serializers.CharField(max_length=30)
    song = serializers.CharField(max_length=50)
    delOrAdd = serializers.CharField(max_length=50)