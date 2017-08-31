---
layout: manuals
nombre: Enviar Ventas
resumen: Manuales sobre como forzar el envio de informes de ventas.
software: POS - ABV
icono: mc-kiosko
category:
  - manuales
  - pos
  - supervisores
  - ventas
---
Permite forzar el envio de ventas al servidor para su posterior cuadratura, primero es necesario que la VPN este conectada para ello...

{% include vpn.html %}

Ahora podremos realizar la operación, Para ello ingresaremos al menú **Ventas** > **Enviar Ventas**

<p class="centrado"><img src="{{site.baseurl}}/docs/pos/img/v_enviar/1.png"></p>

Seleccionaremos primero el rango de fechas faltante y luego presionaremos el botón **Aceptar**

<p class="centrado"><img src="{{site.baseurl}}/docs/pos/img/v_enviar/2.png"></p>

Ahora iremos a la ruta del PosFiscal en C:/PosFiscal donde copiaremos el archivo hacia alguna otra ruta fuera de la carpeta, es importante no tocar ningun otro archivo ya que se pueden generar errores en el sistema. Finalmente debemos enviar el archivo a través de correo electronico hacia soporte@multicard.cl

<p class="centrado"><img src="{{site.baseurl}}/docs/pos/img/v_enviar/3.png"></p>