---
layout: manuals
nombre: Medios de pago - Tarjeta Debito
resumen: Manual sobre como realizar pago con Tarjeta Debito en equipo POS.
software: POS - ABV
icono: mc-kiosko
category:
  - manuales
  - pos
  - supervisores
  - vendedores
  - pago
---
### Pago con Tarjeta Debito

Para efectuar el pago con Tarjeta de Débito Transbank, se debe ingresar el valor a cancelar y presionar el botón **TARJ DEB** que se encuentra en el teclado. A continuación se despliega la siguiente secuencia de ventanas.

<p class="centrado"><img src="{{site.baseurl}}/docs/pos/img/contrato/44.png"></p>

Al invocar la transacción de Débito el Pin Pad solicita el deslizar la tarjeta a través del lector.

<p class="centrado"><img src="{{site.baseurl}}/docs/pos/img/contrato/45.png"></p>

Luego de esto pedirá confirmar el monto y digitar la clave.

<p class="centrado"><img src="{{site.baseurl}}/docs/pos/img/contrato/46.png"></p>

Al presionar **Intro**, queda la ventana principal de la caja con el mensaje **IMPRIMIENDO BOLETA ESPERE**, el cual se imprime en dos copias, el original que queda en poder del comercio y la copia que se le entrega al cliente.

<p class="centrado"><img src="{{site.baseurl}}/docs/pos/img/contrato/47.png"></p>

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