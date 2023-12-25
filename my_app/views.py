from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader

def my_view(request):
    return HttpResponse("hello world")

