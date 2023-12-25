from django.urls import path
from . import views

urlpatterns = [
    path('my_app/', views.my_view, name='my_view'),
]
