from django.contrib import admin
from .models import AttributeModel,ProductModel
from django import forms



class ProductAdmin(admin.ModelAdmin):
    readonly_fields = ('slug',)

# Register your models here.

admin.site.register(ProductModel,ProductAdmin)
admin.site.register(AttributeModel)

