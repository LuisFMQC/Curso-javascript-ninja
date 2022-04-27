(function(win, doc){
    'use strict';

  var ajax = new XMLHttpRequest();
  ajax.open('GET', 'data/data.xml')
  ajax.send();

  console.log('Carregando...')

  var response = '';
  ajax.addEventListener('readystatechange', function() {
    if( isRequestOk() ){
      try{
        response = JSON.parse(ajax.responseText);
      }
      catch(e){
        response = ajax.responseText;
      }
      console.log(response);
      /* var data = JSON.parse(ajax.responseText)
      console.log('Requisição ok :)\n', data.message); */
    }
  }, false)

  function isRequestOk(){
    return ajax.readyState === 4 && ajax.status === 200;
  }
})(window, document);
