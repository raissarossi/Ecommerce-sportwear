from django.urls import path
from rest_framework import routers
from . import views

# router = routers.SimpleRouter()
# router.register('categoria', views.CategoriasViewSet)

urlpatterns = [
    path('categoria/', view=views.CategoriasList.as_view()),
    path('categoria/<pk>/', view=views.CategoriasDetailList.as_view()),

    path('cores/', view=views.CorList.as_view()),
    path('cores/<pk>/', view=views.CorDetailList.as_view()),

    path('genero/', view=views.GeneroList.as_view()),
    path('genero/<pk>/', view=views.GeneroDetailList.as_view()),

    path('ocasiao/', view=views.OcasiaoList.as_view()),
    path('ocasiao/<pk>/', view=views.OcasiaoDetailList.as_view()),

    path('marca/', view=views.MarcaList.as_view()),
    path('marca/<pk>/', view=views.MarcaDetailList.as_view()),

    path('tamanho/', view=views.TamanhoList.as_view()),
    path('tamanho/<pk>/', view=views.TamanhoDetailList.as_view()),

    path('peca/', view=views.PecaList.as_view()),
    path('peca/<pk>/', view=views.PecaDetailList.as_view()),

    path('corfoto/', view=views.CorFotoList.as_view()),
    path('corfoto/<pk>/', view=views.CorFotoDetailList.as_view()),

    path('tamqtd/', view=views.TamQtdList.as_view()),
    path('tamqtd/<pk>/', view=views.TamQtdDetailList.as_view()),

    path('produto/', view=views.ProdutoCompletoList.as_view()),

    path('clientes/', view=views.ClientesList.as_view()),
    path('clientes/<pk>/', view=views.ClientesDetailList.as_view()),

    path('endereco/', view=views.EnderecoList.as_view()),
    path('endereco/<pk>/', view=views.EnderecoDetailList.as_view()),

    path('pedidos/', view=views.PedidosList.as_view()),
    path('pedidos/<pk>/', view=views.PedidosDetailList.as_view()),

    path('pedidositens/', view=views.PedidosItensList.as_view()),
    path('pedidositens/<pk>/', view=views.PedidosItensDetailList.as_view())
]
# +router.urls