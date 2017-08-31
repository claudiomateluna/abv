(function() {
  function displaySearchResults(results, store) {
    var searchResults = document.getElementById('search-results');

    if (results.length) { // Are there any results?
      var appendString = '';

      for (var i = 0; i < results.length; i++) {  // Iterate over the results
        var item = store[results[i].ref];
        appendString += '<li class="media"><a href="' + item.url + '"><div class="pull-left"><i class="' + item.icono + ' media-object"></i></div><div class="media-body"><div class="media-heading">' + item.nombre + '</div>';
        appendString += '<div class="media-p">' + item.resumen.substring(0, 150) + '</div></div></li>';
      }

      searchResults.innerHTML = appendString;
    } else {
      searchResults.innerHTML = '<li><div class="item-content"><div class="item-media"><i class="mc-kiosko" style="font-size:65px;margin-bottom:-16px;"></i></div><div class="item-inner"><div class="item-title col-100 blanco no-found">No existen Manuales con esa información</div></div></div></li>';
    }
  }

  function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');

    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=');

      if (pair[0] === variable) {
        return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
      }
    }
  }

  var searchTerm = getQueryVariable('query');

  if (searchTerm) {
    document.getElementById('search-box').setAttribute("value", searchTerm);

    // Initalize lunr with the fields it will be searching on. I've given title
    // a boost of 10 to indicate matches on this field are more important.
    var idx = lunr(function () {
      this.field('id');
      this.field('nombre', { boost: 10 });
      this.field('software');
      this.field('icono');
      this.field('category');
      this.field('resumen');
    });

    for (var key in window.store) { // Add the data to lunr
      idx.add({
        'id': key,
        'nombre': window.store[key].nombre,
        'software': window.store[key].software,
        'icono': window.store[key].icono,
        'category': window.store[key].category,
        'resumen': window.store[key].resumen
      });

      var results = idx.search(searchTerm); // Get lunr to perform a search
      displaySearchResults(results, window.store); // We'll write this in the next section
    }
  }
})();