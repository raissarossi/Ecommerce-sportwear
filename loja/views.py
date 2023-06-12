from django.shortcuts import render
from rest_framework.response import responses
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework import viewsets
from .models import *
from .serializer import *
# from rest_framework.permissions import IsAuthenticated


# class CategoriasViewSet(viewsets.ModelViewSet):
#     queryset = Categorias.objects.all()
#     serializer_class = CategoriasSerializer


class CategoriasList(ListCreateAPIView):
    queryset = Categorias.objects.all()
    serializer_class = CategoriasSerializer
class CategoriasDetailList(RetrieveUpdateDestroyAPIView):
    queryset = Categorias.objects.all()
    serializer_class = CategoriasSerializer


class CorList(ListCreateAPIView):
    queryset = Cor.objects.all()
    serializer_class = CorSerializer
class CorDetailList(RetrieveUpdateDestroyAPIView):
    queryset = Cor.objects.all()
    serializer_class = CorSerializer


class GeneroList(ListCreateAPIView):
    queryset = Genero.objects.all()
    serializer_class = GeneroSerializer
class GeneroDetailList(RetrieveUpdateDestroyAPIView):
    queryset = Genero.objects.all()
    serializer_class = GeneroSerializer


class OcasiaoList(ListCreateAPIView):
    queryset = Ocasiao.objects.all()
    serializer_class = OcasiaoSerializer
class OcasiaoDetailList(RetrieveUpdateDestroyAPIView):
    queryset = Ocasiao.objects.all()
    serializer_class = OcasiaoSerializer


class MarcaList(ListCreateAPIView):
    queryset = Marca.objects.all()
    serializer_class = MarcaSerializer
class MarcaDetailList(RetrieveUpdateDestroyAPIView):
    queryset = Marca.objects.all()
    serializer_class = MarcaSerializer


class TamanhoList(ListCreateAPIView):
    queryset = Tamanho.objects.all()
    serializer_class = TamanhoSerializer
class TamanhoDetailList(RetrieveUpdateDestroyAPIView):
    queryset = Tamanho.objects.all()
    serializer_class = TamanhoSerializer


class PecaList(ListCreateAPIView):
    queryset = Peca.objects.all()
    serializer_class = PecaSerializer
class PecaDetailList(RetrieveUpdateDestroyAPIView):
    queryset = Peca.objects.all()
    serializer_class = PecaSerializer


class CorFotoList(ListCreateAPIView):
    queryset = CorFoto.objects.all()
    serializer_class = CorFotoSerializer
class CorFotoDetailList(RetrieveUpdateDestroyAPIView):
    queryset = CorFoto.objects.all()
    serializer_class = CorFotoSerializer


class TamQtdList(ListCreateAPIView):
    queryset = TamQtd.objects.all()
    serializer_class = TamQtdSerializer
class TamQtdDetailList(RetrieveUpdateDestroyAPIView):
    queryset = TamQtd.objects.all()
    serializer_class = TamQtdSerializer


class ProdutoCompletoList(ListCreateAPIView):
    queryset = ProdutoCompleto.objects.all()
    serializer_class = ProdutoCompletoSerializer
# class ProdutoCompletoDetailList(RetrieveUpdateDestroyAPIView):
#     queryset = ProdutoCompleto.objects.all()
#     serializer_class = ProdutoCompletoSerializer

class ClientesList(ListCreateAPIView):
    # permission_classes = (IsAuthenticated,)
    queryset = Clientes.objects.all()
    serializer_class = ClientesSerializer
class ClientesDetailList(RetrieveUpdateDestroyAPIView):
    queryset = Clientes.objects.all()
    serializer_class = ClientesSerializer


class EnderecoList(ListCreateAPIView):
    queryset = Endereco.objects.all()
    serializer_class = EnderecoSerializer
class EnderecoDetailList(RetrieveUpdateDestroyAPIView):
    queryset = Endereco.objects.all()
    serializer_class = EnderecoSerializer


class PedidosList(ListCreateAPIView):
    queryset = Pedidos.objects.all()
    serializer_class = PedidosSerializer
class PedidosDetailList(RetrieveUpdateDestroyAPIView):
    queryset = Pedidos.objects.all()
    serializer_class = PedidosSerializer


class PedidosItensList(ListCreateAPIView):
    queryset = PedidosItens.objects.all()
    serializer_class = PedidosItensSerializer
class PedidosItensDetailList(RetrieveUpdateDestroyAPIView):
    queryset = PedidosItens.objects.all()
    serializer_class = PedidosItensSerializer

