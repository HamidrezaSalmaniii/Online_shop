from django.shortcuts import render
from django.views.generic import TemplateView,DetailView
from .models import ProductModel
# Create your views here.

class IndexView(TemplateView):
    template_name = "shop/index.html"
    
class PrudoctView(DetailView):
    model = ProductModel

    def get(self,request,slug):
        prudct = ProductModel.objects.get(slug=slug)
        context = {
            "prudoct":prudct,
        }
        return render(request,"shop/prudoct.html",context)
    