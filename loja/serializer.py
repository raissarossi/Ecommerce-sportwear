from rest_framework import serializers
from .models import *

class CategoriasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categorias
        fields = ['id','nome']

class CorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cor
        fields = ['id','nome']

class GeneroSerializer(serializers.ModelSerializer):
    class Meta:
        model = Genero
        fields = ['id','nome']

class OcasiaoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ocasiao
        fields = ['id','nome']

class MarcaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Marca
        fields = ['id','nome']

class TamanhoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tamanho
        fields = ['id','nome']

class PecaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Peca
        fields = ['id','nome','descricao','preco','marca','genero','categoria','ocasiao', 'coresDisponiveis', 'tamDisponiveis']

class CorFotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = CorFoto
        fields = ['id', 'peca', 'cor', 'foto']

class TamQtdSerializer(serializers.ModelSerializer):
    class Meta:
        model = TamQtd
        fields = ['id', 'peca', 'tamanho', 'qtd_estoque']

class ProdutoCompletoSerializer(serializers.ModelSerializer):
    # fotos = ProdutosFotoSerializer
    class Meta:
        model = ProdutoCompleto
        fields = ['id', 'peca']
    
class ClientesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Clientes 
        fields = ['id', 'nome', 'email', 'data_nascimento', 'cpf','data_cadastro']

class EnderecoSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Endereco
        fields = ['id', 'logradouro','numero','bairro','complemento','cidade','uf','cep','cliente']

class PedidosSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Pedidos
        fields = ['cliente','endereco','data_pedido','preco_total','status_pagamento','status_pedido','metodo']

class PedidosItensSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Pedidos
        fields =['pedido','produto','quantidade','preco','preco_total']