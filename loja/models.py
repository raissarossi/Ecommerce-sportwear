from django.db import models
class Categorias(models.Model):
    nome = models.CharField(max_length=50, unique=True)
    def __str__(self) -> str:
        return self.nome
    
class Cor(models.Model):
    nome = models.CharField(max_length=50, unique=True)
    def __str__(self) -> str:
        return self.nome
    
class Genero(models.Model):
    nome = models.CharField(max_length=50, unique=True)
    def __str__(self) -> str:
        return self.nome
    
class Ocasiao(models.Model):
    nome = models.CharField(max_length=50, unique=True)
    def __str__(self) -> str:
        return self.nome
    
class Marca(models.Model):
    nome = models.CharField(max_length=50, unique=True)
    def __str__(self) -> str:
        return self.nome
    
class Tamanho(models.Model):
    nome = models.CharField(max_length=50, unique=True)
    def __str__(self) -> str:
        return self.nome
    
class Peca(models.Model):
    nome = models.CharField(max_length=100)
    descricao =models.TextField()
    preco = models.DecimalField(max_digits=6, decimal_places=2)
    marca = models.ForeignKey(Marca, on_delete=models.PROTECT)
    genero = models.ForeignKey(Genero, on_delete=models.PROTECT)
    categoria = models.ManyToManyField(Categorias, null=True)
    ocasiao = models.ManyToManyField(Ocasiao, null=True)
    coresDisponiveis = models.ManyToManyField(Cor, null=False)
    tamDisponiveis = models.ManyToManyField(Tamanho, null=False)
    def __str__(self) -> str:
        return self.nome
    

class CorFoto(models.Model):
    peca = models.ForeignKey(Peca, on_delete=models.PROTECT)
    cor = models.ForeignKey(Cor, on_delete=models.PROTECT)
    foto = models.ImageField(upload_to = "produtos")
    def __str__(self) -> str:
        return (f'{self.peca}--{self.cor}')
    

class TamQtd(models.Model):
    peca = models.ForeignKey(CorFoto, on_delete=models.PROTECT)
    tamanho = models.ForeignKey(Tamanho, on_delete=models.PROTECT)
    qtd_estoque = models.PositiveIntegerField()
    def __str__(self) -> str:
        return (f'{self.peca}--{self.tamanho}')
    
class ProdutoCompleto(models.Model):
    peca = models.ForeignKey(Peca, on_delete=models.PROTECT)
    def __str__(self) -> str:
        return self.peca


class Clientes(models.Model):
    nome = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    data_nascimento = models.DateField()
    cpf = models.CharField(max_length=11)
    data_cadastro = models.DateField(auto_now=True)


class Endereco(models.Model):
    logradouro = models.CharField(max_length=255)
    numero = models.CharField(max_length=10)
    bairro = models.CharField(max_length=50)
    complemento = models.CharField(max_length=50)
    cidade = models.CharField(max_length=50)
    uf = models.CharField(max_length=2)
    cep = models.CharField(max_length=8)
    cliente = models.ForeignKey(Clientes, on_delete=models.CASCADE)


class Pedidos(models.Model):
    STATUS_PAGAMENTO_PENDENTE = 'P'
    STATUS_PAGAMENTO_APROVADO = 'A'
    STATUS_PAGAMENTO_NEGADO = 'N'
    LISTA_STATUS_PAGAMENTO=[
        (STATUS_PAGAMENTO_PENDENTE, 'Pendente'),
        (STATUS_PAGAMENTO_APROVADO, 'Aprovado'),
        (STATUS_PAGAMENTO_NEGADO, 'Negado')

    ]

    STATUS_PEDIDO_CANCELADO = 'C'
    STATUS_PEDIDO_ENTREGUE = 'E'
    STATUS_PEDIDO_PREPARACAO = 'P'
    STATUS_PEDIDO_AGUARDANDO = 'A'
    STATUS_PEDIDO_TRANSPORTE = 'T'
    LISTA_STATUS_PEDIDO=[
        (STATUS_PEDIDO_CANCELADO, 'Cancelado'),
        (STATUS_PEDIDO_ENTREGUE, 'Entregue'),
        (STATUS_PEDIDO_PREPARACAO, 'Preparacao'),
        (STATUS_PEDIDO_AGUARDANDO, 'Aguardando'),
        (STATUS_PEDIDO_TRANSPORTE, 'Transporte')
    ]

    PAGAMENTO_PIX = 'P' 
    PAGAMENTO_BOLETO = 'B' 
    PAGAMENTO_CARTAO = 'C'  
    LISTA_METODO=[
        (PAGAMENTO_PIX, 'PIX'), 
        (PAGAMENTO_BOLETO, 'Boleto'), 
        (PAGAMENTO_CARTAO, 'Cartão')
    ]
    
    cliente = models.ForeignKey(Clientes, on_delete=models.PROTECT)
    endereco = models.ForeignKey(Endereco, on_delete=models.PROTECT)
    data_pedido = models.DateField(auto_now=True)
    preco_total = models.DecimalField(editable=False, max_digits=10, decimal_places=2)
    status_pagamento = models.CharField(max_length=1, choices=LISTA_STATUS_PAGAMENTO, default=STATUS_PAGAMENTO_PENDENTE)
    status_pedido = models.CharField(max_length=1, choices=LISTA_STATUS_PEDIDO, default=STATUS_PEDIDO_AGUARDANDO)
    metodo = models.CharField(max_length=1, choices=LISTA_METODO, default=PAGAMENTO_PIX)

class PedidosItens(models.Model):
    pedido = models.ForeignKey(Pedidos, on_delete=models.CASCADE)
    produto = models.ForeignKey(TamQtd, on_delete=models.PROTECT)
    quantidade = models.PositiveIntegerField()
    preco = models.DecimalField(max_digits=10, decimal_places=2)
    preco_total = models.DecimalField(max_digits=10, decimal_places=2)
                               


