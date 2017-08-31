---
layout: manuals
nombre: Reimprimir Voucher
resumen: Manuales sobre como realizar una reimpresión del ultimo u otro voucher.
software: POS - ABV
icono: mc-kiosko
category:
  - manuales
  - pos
  - supervisores
  - vendedores
  - caja2
---

<ul class="nav nav-tabs nav-stacked">
	{% assign docs = site.docs | sort: "title" | where: "category", "reimprimir" %}
	{% for doc in docs %}
	<li class="media"><a href="{% unless doc.category contains 'des' %}{{doc.url}}{%endunless%}{% if doc.category contains 'des' %}#{%endif%}">
	<div class="item-content">
	<div class="pull-left"><i class="{{doc.icono}} media-object"></i></div>
	<div class="media-body">
	<div class="media-heading">{{doc.nombre}}</div>
	<div class="media-p">{{doc.resumen}}</div>
	</div>
	</div>{% unless doc.category contains 'des' %}</a></li>{%endunless%}
	{% endfor %}
</ul>