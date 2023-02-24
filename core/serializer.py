from rest_framework import serializers
from . models import *
  
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['sr', 'name', 'surname', 'mobile_no1', 'mobile_no2', 'mobile_no3']
