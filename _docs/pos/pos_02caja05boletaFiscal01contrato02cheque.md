---
layout: manuals
nombre: Medios de pago - Cheque
resumen: Manual sobre como realizar pago con cheques en equipo POS.
software: POS - ABV
icono: mc-kiosko
category:
  - manuales
  - pos
  - supervisores
  - vendedores
  - pago
---
### Pago con Cheque

Para efectuar el pago con cheque, se debe ingresar el valor a cancelar y presionar el botón **CHEQUE** ubicado en la parte superior del teclado.

<p class="centrado"><img src="{{site.baseurl}}/docs/pos/img/contrato/33.png"></p>

Después presionar la tecla **Intro**, para efectuar el proceso de impresión de la boleta para el cliente y el comprobante para el vendedor.

<p class="centrado"><img src="{{site.baseurl}}/docs/pos/img/contrato/34.png"></p>

#### Medios de Pago

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