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

<div class="list-block">
	<ul class="nav nav-tabs nav-stacked">
		{% assign docs = site.docs | sort: "title" | where: "category", "saldo" %}
		{% for doc in docs %}
		<li><a href="{% unless doc.category contains 'des' %}{{doc.url}}{%endunless%}{% if doc.category contains 'des' %}#{%endif%}" data-view=".view-main" class="item-link close-panel">
		<div class="item-content">
		<div class="item-media"><i class="{{doc.icono}}"></i></div>
		<div class="item-inner">
		<div class="item-title">{{doc.nombre}}</div>
		<div class="item-after">{{doc.resumen}}</div>
		</div>
		</div>{% unless doc.category contains 'des' %}</a></li>{%endunless%}
		{% endfor %}
	</ul>
</div>