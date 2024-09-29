from django.urls import path
from .views import create_entry, get_all_waitlists

urlpatterns = [
    path('api/create-entry/', create_entry, name='create_entry'),
    path('api/get_all_waitlists/', get_all_waitlists, name='get_all_waitlists')
]
