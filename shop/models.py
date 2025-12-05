from django.db import models
from django.utils.text import slugify

# Create your models here.
class AttributeModel(models.Model):
    name = models.CharField()
    def __str__(self):
        return self.name
    class Meta:
        verbose_name = ("Attribute")
        verbose_name_plural = ("Attribute")


class ProductModel(models.Model):
    name = models.CharField()
    product_img = models.ImageField(null=True,blank=True, upload_to="Product_image_folder/%Y/%m/%d/")
    Currency_choices = [
        ("IRR" , "ریال"),
        ("IRT" , "تومان")
    ]
    price = models.DecimalField(
        max_digits=10,
        decimal_places=0
    )
    currency = models.CharField(
        choices=Currency_choices,
        default="IRT"
    )
    description = models.TextField()
    attribute = models.ManyToManyField(AttributeModel)
    slug = models.SlugField(unique=True, blank=True)
    def save(self, *args, **kwargs):
        if not self.slug: 
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)

    class Meta:
        verbose_name = ("Product")
        verbose_name_plural = ("Product")

    def __str__(self):
        return self.name

