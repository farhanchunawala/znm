# from django.urls import path
# from . import views

# urlpatterns = [
# 	# path('', views.index, name='index'),
#     # path('customerlist', views.customerlist, name='customerlist'),
#     # path('customerlist/fg', views.fg),
#     path('customerlist/customerSelect', views.customerSelect),
# ]

from django.urls import path
from . import views
# from .views import *

urlpatterns = [
    # path('',views.customerSelect),
    path('c1',views.customerSelect),
    path('c2',views.customerSelect),

]