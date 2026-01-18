from django.urls import path
from .views import *

urlpatterns = [
    path('health/', health),
    path("auth/login/", login_api, name="login_api"),
]