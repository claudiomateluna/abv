---
layout: manuals
nombre: Transbank por Fecha
resumen: Manuales sobre como realizar una reimpresión de un voucher generado por el equipo POS en cualquier fecha.
software: POS - ABV
icono: mc-kiosko
category:
  - manuales
  - pos
  - supervisores
  - vendedores
  - reimprimir
---
Permite reimprimir voucher de venta con tarjetas bancarias (crédito o débito) la opción **TRANSBANK POR FECHA** imprime cualquier voucher generado, sin embargo, para poder hacerlo es necesario que la VPN este conectada.

{% include vpn.html %}

Ahora realizaremos la reimpresión del último voucher, para ello ingresaremos al menú de **Caja (POS)** > **Reimprimir Voucher** > **Transbank por Fecha**

<p class="centrado"><img src="{{site.baseurl}}/docs/pos/img/reimprimir/3.png"></p>

Se abrira la pantalla de reimpresión en la que es necesario ingresar el número único de la transacción

<p class="centrado"><img src="{{site.baseurl}}/docs/pos/img/reimprimir/4.png"></p>

Lo primero es seleccionar el tipo de transacción, si es Crédito, Débito o una Devolución (Anulación)

<p class="centrado"><img src="{{site.baseurl}}/docs/pos/img/reimprimir/11.png"></p>

Hecho esto ingresaremos el número único, el cual se compone de 5 cuadriculas de elementos y que igual puede ser encontrado en el voucher.

<p class="centrado"><img src="{{site.baseurl}}/docs/pos/img/reimprimir/12.png"></p>

En detalle, la primera cuadricula es el número de local, la segunda el número de caja (siempre la caja es el 0001 ya que en su local sólo hay un equipo POS), la tercera cuadricula es la fecha (la fecha se escribe en orden inverso al tradicional es decir primero el año luego el mes y finalmente el dia, esto sin separadores como guiones u otros), la cuarta cuadricula es el número de operación (este número lo puede encontrar tambien en la web puesta a disposición con las transacciones) y finalmente la última cuadricula debe siempre llevar dos ceros (00)

<p class="centrado"><img src="{{site.baseurl}}/docs/pos/img/reimprimir/9.png"></p>

Ahora presionamos el botón de abajo que dice **buscar**

<p class="centrado"><img src="{{site.baseurl}}/docs/pos/img/reimprimir/10.png"></p>

esto mostrara el detalle del voucher en los datos de la transacción, y para poder imprimir el voucher presionamos el botón volver.

<p class="centrado"><img src="{{site.baseurl}}/docs/pos/img/reimprimir/13.png"></p>
