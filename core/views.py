# # from django.shortcuts import render
# import mysql.connector
# from django.http import HttpResponse, HttpResponseRedirect
# from django.template import loader
# from django.urls import reverse
# from pprint import pprint
# import json
from django.http import JsonResponse
# from django.core import serializers
# from .models import User

# def customerSelect(request):
# 	# template = loader.get_template('customerlist.html')
# 	# context = {
# 	# 	'myresult' : myresult,
# 	# }
# 	# return HttpResponse(json.dumps(myresult))
# 	myresult = User.objects.all().values()  # wrap in list(), because QuerySet is not JSON serializable
# 	return JsonResponse({'myresult': list(myresult)})  # or JsonResponse({'myresult': myresult})

from django.shortcuts import render
from rest_framework.views import APIView
from . models import *
from rest_framework.response import Response
from . serializer import *
# Create your views here.
  
class ReactView(APIView):
    
    serializer_class = UserSerializer
  
    def get(self, request):
        detail = [{"name": detail.name,"surname": detail.surname} 
        for detail in User.objects.all()]
        return Response(detail)
	
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return  Response(serializer.data)

def customerSelect(request):
	# template = loader.get_template('customerlist.html')
	# context = {
	# 	'myresult' : myresult,
	# }
	# return HttpResponse(json.dumps(myresult))
	myresult = User.objects.all().values()  # wrap in list(), because QuerySet is not JSON serializable
	return JsonResponse({'myresult': list(myresult)})  # or JsonResponse({'myresult': myresult})
