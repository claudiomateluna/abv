---
layout: manuals
nombre: FullPrice
resumen: Manual para realizar ventas de prepago FullPrice.
software: SPDH40
icono: mc-caja
category:
  - manuales
  - pos
  - general
  - operacion
---
Es un equipo prepago que se vende con cargo a movistar (Movistar paga el IVA) se debe seleccionar el equipo prepago que diga Movistar ONE y el cliente puede pagar hasta en 12 cuotas precio contado.

**IMPORTANTE!** : Estos equipos son vendidos por encargo de Movistar al Franquisiado de ahí que el valor del IVA sea cancelado por Movistar, por lo tanto consulte adecuadamente si existe alguno disponible en el local.

La Operación de venta es igual a cualquier otro **prepago**, seleccione el tipo de boleta que realizara.

<p class="centrado"><img src="{{site.baseurl}}/docs/pos/img/fullprice/1.png"></p>

Ingrese el código del vendedor (R.U.T.).

<p class="centrado"><img src="{{site.baseurl}}/docs/pos/img/fullprice/2.png"></p>

Visualizará la pantalla de autentia, donde estará el Rut del vendedor que digito como código de vendedor. Luego debe poner su huella digital solo una vez si esta es aprobada por Autentia, pero en caso de ser rechazada será solicitada 4 veces, si aun así es rechazada por no coincidir con la registrada, solo dirá que esta rechazada pero no bloquea al vendedor.

<p class="centrado"><img src="{{site.baseurl}}/docs/pos/img/fullprice/3.png"></p>

Seleccione la opción de venta **PREPAGO**

<p class="centrado"><img src="{{site.baseurl}}/docs/pos/img/prepago/1.png"></p>

Aparecera la opción de ingresar el articulo

<p class="centrado"><img src="{{site.baseurl}}/docs/pos/img/prepago/2.png"></p>

Presione Enter para que se despliegue la lista de precios, Se mostraran todos los elementos disponibles en la lista de precios, **IMPORTANTE** el producto seleccionado en la lista debe tener la categoria **MOVISTAR ONE** y en la glosa de la parte inferior aparecera indicado como **FULLPRICE**

<p class="centrado"><img src="{{site.baseurl}}/docs/pos/img/fullprice/4.png"></p>

O puede presionar el boton **BUSCAR** y escribir el nombre del articulo para filtrar los elementos en la lista.

<p class="centrado"><img src="{{site.baseurl}}/docs/pos/img/prepago/4.png"></p>

Ahora debe ingresar el **NUMERO DE SERIE** del producto que venderá

<p class="centrado"><img src="{{site.baseurl}}/docs/pos/img/prepago/6.png"></p>

Ingrese el **NUMERO DE ABONADO**

<p class="centrado"><img src="{{site.baseurl}}/docs/pos/img/prepago/7.png"></p>

Totalice y seleccione el medio de pago, al salir la boleta en la parte inferior aparecera la Glosa "POR CUENTA DE TELEFONICA MOVILES CHILE S.A."

<p class="centrado"><img src="{{site.baseurl}}/docs/pos/img/prepago/8.png"></p>

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

Aquí a la izquierda se muestra la boleta y a la derecha el comprobante interno que emitira la impresora.

<p class="centrado"><img src="{{site.baseurl}}/docs/pos/img/fullprice/5.png"></p>