---
layout: manuals
nombre: Anular Voucher TC
resumen: Manuales sobre como Anular de Transacciones con Tarjeta de Crédito.
software: POS - ABV
icono: mc-kiosko
category:
  - manuales
  - pos
  - supervisores
  - caja3
---
Permite anular transacciones realizadas con tarjetas de credito, anulando la compra realizada por el cliente, sin embargo, para poder hacerlo es necesario que la VPN este conectada.

{% include vpn.html %}

Ahora realizaremos la anulación del voucher, para ello ingresaremos al menú **Caja (POS)** > **Anular Voucher TC**

<p class="centrado"><img src="{{site.baseurl}}/docs/pos/img/anular/1.png"></p>

Posteriormente, seleccione la fecha de la transacción cuyo pago se desea anular.

<p class="centrado"><img src="{{site.baseurl}}/docs/pos/img/anular/2.png"></p>

En la siguiente pantalla haga clic en la transacción y luego presione el botón **Aceptar**

<p class="centrado"><img src="{{site.baseurl}}/docs/pos/img/anular/3.png"></p>

Hecho lo anterior se abrira una pantalla para ingresar el número único del voucher el cual tiene el siguiente formato...

En la primera cuadricula se ingresa el número de local, en la segunda se debe ingresar el número de caja (siempre es 0001), en la tercera cuadricula se debe ingresar la fecha (en formato inverso al tradicional, es decir, primero el año, luego el mes y finalmente el día), en la cuarta se debe ingresar el número de operación que se puede encontrar en el voucher y en la última cuadricula ingresaremos dos ceros, luego de ellos presionamos en el botón buscar.

<p class="centrado"><img src="{{site.baseurl}}/docs/pos/img/anular/4.png"></p>

Finalmente una vez que se encuentre la transacción presionamos el botón volver para anualarla.

<p class="centrado"><img src="{{site.baseurl}}/docs/pos/img/anular/5.png"></p>