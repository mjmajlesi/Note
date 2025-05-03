from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Note
from .serializers import NoteSerializers
# Create your views here.

@api_view(['GET'])
def getNotes(request):
    notes = Note.objects.all()
    serializer = NoteSerializers(notes , many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getNote(request , pk):
    notes = Note.objects.get(id=pk)
    serializer = NoteSerializers(notes , many=False)
    return Response(serializer.data)

@api_view(['PUT'])
def updateNotes(request , pk):
    data = Note.objects.get(id=pk)
    serializer = NoteSerializers(data , data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)
    