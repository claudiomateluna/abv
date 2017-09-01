---
layout: manuals
nombre: Tipos de Venta - Recambio
resumen: Manual sobre como realizar una venta bajo el tipo de venta Recambio.
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

**Paso 1.**<br>
Ingresar datos en POS de vendedor: Rut y Huella respectivamente

<p class="centrado"><img src="{{site.baseurl}}/docs/pos/img/recambio/1.png"></p>

**Paso 2.**<br>
Seleccionar el campo Recambio dentro de la aplicación.

<p class="centrado"><img src="{{site.baseurl}}/docs/pos/img/recambio/2.png"></p>

**Paso 3.**<br>
Ingresar el Código de cliente

<p class="centrado"><img src="{{site.baseurl}}/docs/pos/img/recambio/3.png"></p>

**Paso 4.**<br>
Ingresar la Orden de Servicio

<p class="centrado"><img src="{{site.baseurl}}/docs/pos/img/recambio/4.png"></p>

**Paso 5.**<br>
Ingresar el R.U.T. del Cliente

<p class="centrado"><img src="{{site.baseurl}}/docs/pos/img/recambio/5.png"></p>

**Paso 6.**<br>
Ingresar el Nombre del Cliente

<p class="centrado"><img src="{{site.baseurl}}/docs/pos/img/recambio/6.png"></p>

**Paso 7.**<br>
Ingresar datos de búsqueda de producto (presione el botón **buscar** o la tecla B), escriba las primeras letras del producto y presione enter, por ejemplo SAM para buscar los equipos Samsung.

<p class="centrado"><img src="{{site.baseurl}}/docs/pos/img/recambio/7.png"></p>

**Paso 8.**<br>
Seleccione el producto que busca

<p class="centrado"><img src="{{site.baseurl}}/docs/pos/img/recambio/8.png"></p>

**Paso 9.**<br>
Ingresar según corresponda Puntos Movistar de cliente
* **Nota:** de no tener puntos presionar tecla ENTER*

<p class="centrado"><img src="{{site.baseurl}}/docs/pos/img/recambio/9.png"></p>

**Paso 10.**<br>
Ingresar el Número de serie equipo seleccionado

<p class="centrado"><img src="{{site.baseurl}}/docs/pos/img/recambio/10.png"></p>

**Paso 11.**<br>
Ingresar el Número de abonado de cliente

<p class="centrado"><img src="{{site.baseurl}}/docs/pos/img/recambio/11.png"></p>

**Paso 12.**<br>
Ingresar valor o monto de promoción según segmento de cliente
* **Nota:** de no tener dicho beneficio presionar tecla ENTER*

<p class="centrado"><img src="{{site.baseurl}}/docs/pos/img/recambio/12.png"></p>

**Paso 13.**<br>
Ingresar nombre de promoción según corresponda
* **Nota:** para saltar este campo presionar ENTER*

<p class="centrado"><img src="{{site.baseurl}}/docs/pos/img/recambio/13.png"></p>

**Paso 14.**<br>
Ingresar número de cuotas aceleradas según corresponda

<p class="centrado"><img src="{{site.baseurl}}/docs/pos/img/recambio/14.png"></p>

**Paso 15.**<br>
Ingresar el valor de la cuota de aceleración según corresponda

<p class="centrado"><img src="{{site.baseurl}}/docs/pos/img/recambio/15.png"></p>

**Paso 16.**<br>
Luego la venta quedara expresada de la siguiente forma:

<p class="centrado"><img src="{{site.baseurl}}/docs/pos/img/recambio/16.png"></p>

**Paso 17.**<br>
Antes de Totalizar se pueden eliminar campos según corresponda, para ello ubiquese con el cursor del teclado sobre el ítem que quiere borrar, luego presione la *tecla Anular*, y luego presionar *tecla enter*.

<p class="centrado"><img src="{{site.baseurl}}/docs/pos/img/recambio/17.png"></p>

**Paso 18.**<br>
Esta eliminación se corrobora en el total de boleta y en pantalla automáticamente.

<p class="centrado"><img src="{{site.baseurl}}/docs/pos/img/recambio/18.png"></p>

**Paso 19.**<br>
Se realiza totalización de venta y se determina el medio de pago a utilizar.

<p class="centrado"><img src="{{site.baseurl}}/docs/pos/img/recambio/19.png"></p>

A continuación se explican en detalle cada una de las modalidades de pago, las cuales pueden ser:

 **- Efectivo** <br>
 **- Cheque**<br>
 **- Tarjeta Crédito Transbank**<br>
 **- Tarjeta Debito Transbank**<br>

<ul class="nav nav-tabs nav-stacked">
	{% assign docs = site.docs | sort: "nombre" | where: "category", "pago" %}
	{% for doc in docs %}
	<li class="media"><a href="{{site.baseurl}}{{doc.url}}">
	<div class="pull-left"><i class="{{doc.icono}} media-object"></i></div>
	<div class="media-body">
	<div class="media-heading">{{doc.nombre}}</div>
	<div class="media-p">{{doc.resumen}}</div>
	</div></a></li>
	{% endfor %}
</ul>

### Tipos de Venta

<ul class="nav nav-tabs nav-stacked">
	{% assign docs = site.docs | sort: "nombre" | where: "category", "boleta" %}
	{% for doc in docs %}
	<li class="media"><a href="{{site.baseurl}}{{doc.url}}">
	<div class="pull-left"><i class="{{doc.icono}} media-object"></i></div>
	<div class="media-body">
	<div class="media-heading">{{doc.nombre}}</div>
	<div class="media-p">{{doc.resumen}}</div>
	</div></a></li>
	{% endfor %}
</ul>