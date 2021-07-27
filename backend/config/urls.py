from django.urls import path
from django.contrib import admin
from django.contrib.auth import logout

from django.conf.urls import include
from rest_framework.viewsets import ViewSet

from config.api import api


#nuevo
from rest_framework.authtoken import views

urlpatterns = [
    path('admin/', admin.site.urls, name='admin'),
    path('logout/', logout, {'next_page': '/'}, name='logout'),
    
    path('api/', include(api.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),


    path('api/v1.0/', include('apps.users.urls')),
    path('api/v1.0/token', views.obtain_auth_token),
    
]
