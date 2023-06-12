# Generated by Django 4.1.7 on 2023-04-04 19:39

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('loja', '0004_remove_produtos_cor_remove_produtos_tamanho_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Peca',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(max_length=100)),
                ('descricao', models.TextField()),
                ('preco', models.DecimalField(decimal_places=2, max_digits=6)),
                ('categoria', models.ManyToManyField(null=True, to='loja.categorias')),
                ('genero', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='loja.genero')),
                ('marca', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='loja.marca')),
                ('ocasiao', models.ManyToManyField(null=True, to='loja.ocasiao')),
            ],
        ),
        migrations.CreateModel(
            name='ProdTamCorQtd',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('qtd_estoque', models.PositiveIntegerField()),
                ('cor', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='loja.cor')),
                ('peca', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='loja.peca')),
                ('tamanho', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='loja.tamanho')),
            ],
        ),
    ]
