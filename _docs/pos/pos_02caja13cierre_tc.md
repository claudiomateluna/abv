---
layout: manuals
nombre: Cierre T.C.
resumen: Manuales sobre como realizar cierres de transbank.
software: POS - ABV
icono: mc-kiosko
category:
  - manuales
  - pos
  - supervisores
  - vendedores
  - caja6
---
Opciones para forzar el cierre de operaciones con tarjetas

<ul class="nav nav-tabs nav-stacked">
	{% assign docs = site.docs | sort: "nombre" | where: "category", "cierre" %}
	{% for doc in docs %}
	<li class="media"><a href="{% unless doc.category contains 'des' %}{{site.baseurl}}{{doc.url}}{%endunless%}{% if doc.category contains 'des' %}#{%endif%}">
		<div class="pull-left"><i class="{{doc.icono}} media-object"></i></div>
		<div class="media-body">
		<div class="media-heading">{{doc.nombre}}</div>
		<div class="media-p">{{doc.resumen}}</div>
		</div>{% unless doc.category contains 'des' %}</a>{%endunless%}
	</li>
	{% endfor %}
</ul>