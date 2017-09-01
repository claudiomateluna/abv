---
layout: manuals
nombre: Consultar Saldo
resumen: Manuales sobre como realizar una Consulta de Saldo en el equipo POS.
software: POS - ABV
icono: mc-kiosko
category:
  - manuales
  - pos
  - supervisores
  - vendedores
  - caja4
  - des
---
No se encuentra habilitado en el POS

<ul class="nav nav-tabs nav-stacked">
	{% assign docs = site.docs | sort: "nombre" | where: "category", "saldo" %}
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