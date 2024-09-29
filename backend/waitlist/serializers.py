# serializers.py
from rest_framework import serializers
from .models import WaitlistModel


class WaitlistSerializer(serializers.ModelSerializer):
    class Meta:
        model = WaitlistModel
        fields = '__all__'
