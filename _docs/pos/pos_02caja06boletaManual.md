---
layout: manuals
nombre: Venta Manual
resumen: Manual para realizar una venta sin emisión de documento impreso en el equipo POS.
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
Esta opción permite realizar una venta del mismo modo a la opción Boleta Fiscal, la única diferencia es que no existe emisión de documento impreso.

Esta opción es **SOLO DE CONTINGENCIA** cuando la impresora no esté disponible (robo, servicio técnico, etc.)

Por ley cada local que disponga de impresoras fiscales debe mantener un talonario de boletas timbradas para estos casos. De esta forma la transacción es registrada en la aplicación para mantener las estadísticas pero no se realiza ninguna validación ni impresión en la impresora.

Sólo debe ser usada en casos extremos.

Podemos ingresar desde el menú **Caja (POS)** > **Venta Manual** o desde el botón habilitado en la pantalla inicial del programa (**Boleta Manual**).

<p class="centrado"><img src="{{site.baseurl}}/docs/pos/img/boletaManual/1.png"></p>

Al presionar la opción de Boleta Manual por primera vez y sólo para esta opción, se **solicitará el número de boleta físico** a emitir (del talonario normal de contingencia):

<p class="centrado"><img src="{{site.baseurl}}/docs/pos/img/boletaManual/2.png"></p>

Este número es almacenado y se incrementará en forma automática a medida que se emitan boletas manuales.

Cabe destacar que bajo esta modalidad se **deshabilitan los medios de pago electrónicos** ya que no se podría emitir los voucher de la transacción.

Posteriormente se continúa con el proceso normal de venta solicitando el código del vendedor (**R.U.T.**).

<p class="centrado"><img src="{{site.baseurl}}/docs/pos/img/boletaManual/3.png"></p>

Para ambos casos, Boleta Manual o Boleta Fiscal, se solicitará **verificación biométrica** para autorizar la venta

<p class="centrado"><img src="{{site.baseurl}}/docs/pos/img/boletaManual/4.png"></p>

Posteriormente, se despliega la siguiente ventana para seleccionar el tipo de venta o Transacción.

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