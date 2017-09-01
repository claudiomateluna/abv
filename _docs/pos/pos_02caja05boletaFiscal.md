---
layout: manuals
nombre: Venta IF
resumen: Manual sobre como realizar una venta emitiendo boleta en el equipo POS.
software: POS - ABV
icono: mc-kiosko
category:
  - manuales
  - pos
  - supervisores
  - vendedores
  - caja
  - boleta
---
Esta opción permite realizar una venta emitiendo la boleta, comprobante interno y voucher de pago por la impresora fiscal. Para acceder a esta opción, la impresora debe estar correctamente conectada al POS, de lo contrario se producirá un error al intentar comunicar con el POS, sin embargo, para poder hacerlo es necesario que la VPN este conectada.

{% include vpn.html %}

Ahora podemos ingresar desde el menú **Caja (POS)** > **Venta IF** o desde el botón habilitado en la pantalla inicial del programa.

<p class="centrado"><img src="{{site.baseurl}}/docs/pos/img/boletaFiscal/1.png"></p>

Posteriormente se continúa con el proceso normal de venta solicitando el código del vendedor (**R.U.T.**).

<p class="centrado"><img src="{{site.baseurl}}/docs/pos/img/boletaFiscal/2.png"></p>

Para ambos casos, Boleta Manual o Boleta Fiscal, se solicitará verificación biométrica para autorizar la venta.

<p class="centrado"><img src="{{site.baseurl}}/docs/pos/img/boletaFiscal/3.png"></p>

Posteriormente, se despliega la siguiente ventana para seleccionar el tipo de venta o Transacción.

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