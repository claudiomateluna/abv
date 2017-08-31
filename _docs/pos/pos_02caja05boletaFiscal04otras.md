---
layout: manuals
nombre: Tipos de Venta - Prepago
resumen: Manual sobre como realizar una venta bajo el tipo de venta Prepago.
software: POS - ABV
icono: mc-kiosko
category:
  - manuales
  - pos
  - supervisores
  - vendedores
  - boleta
---
Para poder ingresar de forma correcta los campos de recambio primero el usuario tiene que estar enrolado dentro de la aplicación POS y en AUTENTIA.

Primero debes ingresar datos en POS de vendedor: Rut y Huella respectivamente

<p class="centrado"><img src="{{site.baseurl}}/docs/pos/img/recambio/1.png"></p>

Al ingresar el **CODIGO VENDEDOR** y presionar tecla **Intro**, se presenta la siguiente ventana:



<p class="centrado"><img src="{{site.baseurl}}/docs/pos/img/prepago/9.png"></p>

A continuación se explican en detalle cada una de las modalidades de pago, las cuales pueden ser:

 **- Efectivo** <br>
 **- Cheque**<br>
 **- Tarjeta Crédito Transbank**<br>
 **- Tarjeta Debito Transbank**<br>

<div class="list-block">
	<ul class="nav nav-tabs nav-stacked">
		{% assign docs = site.docs | sort: "title" | where: "category", "pago" %}
		{% for doc in docs %}
		<li><a href="{{doc.url}}" data-view=".view-main" class="item-link close-panel">
		<div class="item-content">
		<div class="item-media"><i class="{{doc.icono}}"></i></div>
		<div class="item-inner">
		<div class="item-title">{{doc.nombre}}</div>
		<div class="item-after">{{doc.resumen}}</div>
		</div>
		</div></a></li>
		{% endfor %}
	</ul>
</div>

### Tipos de Venta

<div class="list-block">
	<ul>
		{% assign docs = site.docs | sort: "nombre" | where: "category", "boleta" %}
		{% for doc in docs %}
		<li><a href="{{doc.url}}" data-view=".view-main" class="item-link close-panel">
		<div class="item-content">
		<div class="item-media"><i class="{{doc.icono}}"></i></div>
		<div class="item-inner">
		<div class="item-title">{{doc.nombre}}</div>
		<div class="item-after">{{doc.resumen}}</div>
		</div>
		</div></a></li>
		{% endfor %}
	</ul>
</div>