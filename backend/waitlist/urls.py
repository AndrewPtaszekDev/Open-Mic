from django.urls import path
from .views import create_entry, get_all_waitlists, test, delete_entry, create_entry_admin, clear_db, pop

urlpatterns = [
    path('api/create-entry/', create_entry, name='create_entry'),
    path('api/get_all_waitlists/', get_all_waitlists, name='get_all_waitlists'),
    path('api/test/', test, name = 'test'),

    #For admin access
    path('access/delete_entry/', delete_entry, name = 'delete_entry'),
    path('access/create_entry_admin', create_entry_admin, name = 'create_entry_admin'),
    path('access/clear_db/', clear_db, name = 'clear_db'),
    path('access/pop/', pop, name = 'pop'),
]
