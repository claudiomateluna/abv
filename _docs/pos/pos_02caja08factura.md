---
layout: manuals
nombre: Factura
resumen: Realiza facturas que emite un comprobante con el detalle de la venta a través de una impresora normal.
software: POS - ABV
icono: mc-kiosko
category:
  - manuales
  - pos
  - supervisores
  - vendedores
  - caja1
---
Permite realizar ventas de equipos bajo el tratamiento del tipo de transacción PREPAGO pero con la diferencia que se emite un comprobante con el detalle de la venta realizada a través de una impresora normal. El documento tributario propiamente tal (factura de venta) debe ser realizado por otro sistema propio del franquiciado, sea este manual o mediante algún tipo de aplicación.

<p class="centrado"><img src="{{site.baseurl}}/docs/pos/img/facturas/1.png"></p>

Al inicio de la transacción se solicitará el folio inicial de la factura a emitir, para posteriormente mantener el correlativo el que puede ser cambiado en esta opción

<p class="centrado"><img src="{{site.baseurl}}/docs/pos/img/facturas/2.png"></p>

Posteriormente la transacción sigue el curso normal de la venta de equipos continuando con los medios de pago despues de seleccionar el o los equipos.

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