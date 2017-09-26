---
layout: manuals
nombre: Prepagos Propios
resumen: Manual para realizar ventas de prepago Propios del franquisiado, estos son equipos comprados por el franquisiado a movistar para su venta.
software: SPDH40
icono: mc-caja
category:
  - manuales
  - pos
  - general
  - operacion
---
Son equipos que el franquisiado compra a Movistar y que por lo mismo es el franquisiado quien decide su valor de venta al Cliente, la venta se realiza en la sección **Otras Ventas**

**IMPORTANTE!** : Estos equipos son propiedad de su franquisiado consulte la disponibilidad de equipos para estos casos.

Al ser equipos propios del franquisiado, es necesario primero ingresar el producto manualmente al sistema para ello debe **ingresar al sistema con cuenta de Supervisor**

Seguido de ello ingrese al Menú **Mantención > Productos**

<p class="centrado"><img src="{{site.baseurl}}/docs/pos/img/propios/1.png"></p>

Debe completar este cuadro, partiendo por el código de Barra (código genérico al producto o bien escaneando la serie de la caja)

<p class="centrado"><img src="{{site.baseurl}}/docs/pos/img/propios/2.png"></p>

**DEBE** poner **NO** en pide precio en la venta, de no hacerlo, el ejecutivo podría modificar el precio de venta, Presionamos **Grabar** para finalizar el ingreso manual del producto.

<p class="centrado"><img src="{{site.baseurl}}/docs/pos/img/propios/3.png"></p>

Una vez ingresado el producto la venta se debe realizar por la opción **OTRAS VENTAS**

<p class="centrado"><img src="{{site.baseurl}}/docs/pos/img/fullprice/1.png"></p>

Ingrese el código del vendedor (R.U.T.).

<p class="centrado"><img src="{{site.baseurl}}/docs/pos/img/fullprice/2.png"></p>

Visualizará la pantalla de autentia, donde estará el Rut del vendedor que digito como código de vendedor. Luego debe poner su huella digital solo una vez si esta es aprobada por Autentia, pero en caso de ser rechazada será solicitada 4 veces, si aun así es rechazada por no coincidir con la registrada, solo dirá que esta rechazada pero no bloquea al vendedor.

<p class="centrado"><img src="{{site.baseurl}}/docs/pos/img/fullprice/3.png"></p>

Seleccione la Opción **OTRAS VENTAS**

<p class="centrado"><img src="{{site.baseurl}}/docs/pos/img/propios/4.png"></p>

Presione la tecla **BUSCAR** para que se desplieguen los articulos ingresados manualmente en el equipo, en ella encontrara el equipo propio ingresado con anterioridad.

<p class="centrado"><img src="{{site.baseurl}}/docs/pos/img/propios/5.png"></p>

Totalice y seleccione el medio de pago

<p class="centrado"><img src="{{site.baseurl}}/docs/pos/img/propios/6.png"></p>

A continuación se explican en detalle cada una de las modalidades de pago, las cuales pueden ser:

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