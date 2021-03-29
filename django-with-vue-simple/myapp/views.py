from django.shortcuts import render
import json
from django.core.serializers.json import DjangoJSONEncoder

# Create your views here.
def index(request):
    return render(
        request,
        "myapp/index.html",
        {
            'fff': "{'text': 'hello'}"
        }
    )

