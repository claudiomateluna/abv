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

**Paso 1.**<br>
Ingresar datos en POS de vendedor: Rut y Huella respectivamente

<p class="centrado"><img src="{{site.baseurl}}/docs/pos/img/recambio/1.png"></p>

Al ingresar el **CODIGO VENDEDOR** y presionar tecla **Intro**, se presenta la siguiente ventana:

<p class="centrado"><img src="{{site.baseurl}}/docs/pos/img/prepago/1.png"></p>

Al seleccionar en **TIPO DE VENTA** la opción **PREPAGO** y presionar la tecla **Intro**, inmediatamente se solicita **INGRESE ARTICULO**, el cual se puede obtener presionando la tecla **BUSCAR** del teclado.

<p class="centrado"><img src="{{site.baseurl}}/docs/pos/img/prepago/2.png"></p>

Y en forma inmediata presionar la tecla Intro se despliega la lista de Productos disponibles solo con su valor al Contado.

<p class="centrado"><img src="{{site.baseurl}}/docs/pos/img/prepago/3.png"></p>

Si se ingresa algún criterio de búsqueda, esto permite filtrar los productos a mostrar, por ejemplo si ingresamos "SONY" y presionamos la tecla **Intro**, se mostrarán sólo los productos que comiencen con esta descripción:

<p class="centrado"><img src="{{site.baseurl}}/docs/pos/img/prepago/4.png"></p>

<p class="centrado"><img src="{{site.baseurl}}/docs/pos/img/prepago/5.png"></p>

Si se despliega más de un producto, éste se elige presionando las teclas ↓ y ↑.

Después de seleccionar el equipo para realizar la compra del Prepago y presionar el botón **Intro**, se solicita el ingreso del **NUMERO DE SERIE** del equipo seleccionado.

<p class="centrado"><img src="{{site.baseurl}}/docs/pos/img/prepago/6.png"></p>

Al ingresar el **NUMERO SERIE** y presionar la tecla **Intro**, se solicita el ingreso del **NUMERO ABONADO**.

<p class="centrado"><img src="{{site.baseurl}}/docs/pos/img/prepago/7.png"></p>

Después de ingresar el **NUMERO ABONADO**, se solicita nuevamente **INGRESE ARTICULO**.

<p class="centrado"><img src="{{site.baseurl}}/docs/pos/img/prepago/8.png"></p>

Cuando no hay más artículos que ingresar, se presiona la tecla **TOTAL** y luego la tecla **Intro**, los datos del equipo de Prepago son desplegados en la ventana con el **Total Boleta** que corresponde  al valor total del documento o boleta emitida, **Total Boleta Movistar** que se despliega en cero (0) y el valor **A Pagar** que corresponde al monto a cancelar en el momento.

En la parte superior izquierda de la ventana se solicita **INGRESE PAGO** y el valor total a pagar por el equipo de Prepago en **DEBE**.

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
	<ul class="nav nav-tabs nav-stacked">
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