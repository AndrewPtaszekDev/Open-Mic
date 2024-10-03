# serializers.py
from rest_framework import serializers
from .models import WaitlistModel


class WaitlistSerializer(serializers.ModelSerializer):
    class Meta:
        model = WaitlistModel
        fields = '__all__'

    def create(self, validated_data):
        custom_order = self.context.get('custom_order', None)
        instance = WaitlistModel(**validated_data)
        instance.save(custom_order=custom_order)  # Call save with the custom_order
        return instance

class AccessSerializer(serializers.Serializer):
    password = serializers.CharField(max_length = 25)
    name = serializers.CharField(max_length=30)
    song = serializers.CharField(max_length=50)
    delOrAdd = serializers.CharField(max_length=50)