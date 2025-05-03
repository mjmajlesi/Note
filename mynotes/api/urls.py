from django.urls import path
from . import views

urlpatterns = [
    path('api/notes', views.getNotes , name="notes"),
    path('api/notes/<str:pk>/update' , views.updateNotes , name="updateNote"),
    path('api/notes/<str:pk>/' , views.getNote , name="note"),
]