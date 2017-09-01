---
layout: manuals
nombre: Instalar SPDH40
resumen: Manual para la instalación del software SPDH4.0 en los POS Movistar.
software: SPDH40
icono: mc-caja
category:
  - manuales
  - pos
  - spdh40
  - general
---
1.- Desinstalar todo lo relacionado con SPDH31.<br>
2.- Instalar SPDH40 (Se adjunta setup de instalación).

<p class="centrado"><a href="{{site.baseurl}}/docs/manuales/download/spdh32bits.rar" class="link external" download><img src="{{site.baseurl}}/docs/manuales/img/spdh40/1.png"></a></p>

Al descomprimir se descargaran dos archivos SetupSpdh40.exe y SetupSpdh40.msi, se debe ejecutar SetupSpdh40.exe ya que este invoca al archivo msi.<br>
Luego siguiente hasta finalizar la instalación.

<p class="centrado"><img src="{{site.baseurl}}/docs/manuales/img/spdh40/2.png"></p>

3.- Instalar Controladores (drivers) Verifone VX805

<p class="centrado"><a href="{{site.baseurl}}/docs/manuales/download/VeriFoneUSBUARTDriver_Vx1.0.0.37_Build2.rar" class="link external" download><img src="{{site.baseurl}}/docs/manuales/img/spdh40/10.png"></a></p>

4.- Copiar el archivo **AdmFiscal.jar** de la Caja POS y ini **PosFiscal.ini**

<p class="centrado"><img src="{{site.baseurl}}/docs/manuales/img/spdh40/11.png"></p>

Estos archivos deben copiar y reemplazar por los que están en la carpeta **C:/PosFiscal** ya que contiene la nueva versión.

5.- Registro de SPDH40

<p class="centrado"><a href="{{site.baseurl}}/docs/manuales/download/RegProduccion.reg" class="link external" download><img src="{{site.baseurl}}/docs/manuales/img/spdh40/3.png"></a></p>

Para que este archivo quede cargado en forma correcta en el regedit se debe de ir al menú de inicio y ejecutar el **REGEDIT**.

<p class="centrado"><img src="{{site.baseurl}}/docs/manuales/img/spdh40/4.png"></p>

<p class="centrado"><img src="{{site.baseurl}}/docs/manuales/img/spdh40/5.png"></p>

En el menú del **Editor de registros de Windows** se de ir al archivo e importar como se muestra en la imagen y se debe seleccionar el archivo **RegProduccion.reg**.

<p class="centrado"><img src="{{site.baseurl}}/docs/manuales/img/spdh40/6.png"></p>

6.- Copiar el Jar para la generación de Informes **itextpdf-5.1.3.jar**.

<p class="centrado"><a href="{{site.baseurl}}/docs/manuales/download/itextpdf-5.1.3.jar" class="link external" download><img src="{{site.baseurl}}/docs/manuales/img/spdh40/12.png"></a></p>

Este archivo se debe copiar en la carpeta **C:/Archivos de programa/Java/jre1.6.0_06/lib/ext**

<p class="centrado"><img src="{{site.baseurl}}/docs/manuales/img/spdh40/13.png"></p>

7.- Se debe reemplazar la carpeta C:/xcash por la que se adjunta.

<p class="centrado"><a href="{{site.baseurl}}/docs/manuales/download/xcash.rar" class="link external" download><img src="{{site.baseurl}}/docs/manuales/img/spdh40/8.png"></a></p>

8.- Se debe de registrar la siguiente OCX **MSCOMCT2.OCX** para que no se presente error al realizar el CIERRE en la caja.

<p class="centrado"><a href="{{site.baseurl}}/docs/manuales/download/MSCOMCT2.OCX" class="link external" download><img src="{{site.baseurl}}/docs/manuales/img/spdh40/7.png"></a></p>

Para registrar se debe ir a una ventana de DOS como se muestra en la imagen, copiar la OCX en **C:/WINDOWS/system32** y escribir la siguiente instrucción.<br>
C:/WINDOWS/system32>regsvr32.exe "C:/WINDOWS/system32/MSCOMCT2.OCX"

Si el registro es exitoso debe arrojar el mensaje de la imagen.

<p class="centrado"><img src="{{site.baseurl}}/docs/manuales/img/spdh40/9.png"></p>