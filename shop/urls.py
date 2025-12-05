from django.urls import path
from . import views


urlpatterns = [
    path("",views.IndexView.as_view()),
    path("prudocts/<slug:slug>",views.PrudoctView.as_view())
    
]
