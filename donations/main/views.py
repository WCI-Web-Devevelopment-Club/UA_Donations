from django.shortcuts import render

# Create your views here.

def index(response):
    render(response, 'base.html', {})