from rest_framework import serializers

from django.conf import settings

from apps.users.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User

        fields = [
            "id",  
            "password",         
            "last_login",
            "is_superuser",
            "email",
            "first_name",
            "last_name",
            "avatar",
            "token",
            "is_admin",
            "is_active",
            "is_staff",
            "registered_at",
            "groups",
            "user_permissions"
        ]


