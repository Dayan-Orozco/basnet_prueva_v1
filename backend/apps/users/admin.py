from django.contrib import admin
from django.contrib.auth.models import Group
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin

from apps.users.models import User



# Now register the new UserAdmin...
admin.site.register(User)
# Unregister the Group model from admin.
admin.site.unregister(Group)
