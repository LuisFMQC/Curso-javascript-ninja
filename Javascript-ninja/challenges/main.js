(function(win, doc){
    'use strict';

 var ajax = new XMLHttpRequest();
 ajax.open('GET', 'data/data.json')
 ajax.send();

 console.log('Carregando...')

  ajax.addEventListener('readystatechange', function() {
    if( isRequestOk() ){
      console.log('Requisição ok :)');
    }
  }, false)

  function isRequestOk(){
    return ajax.readyState === 4 && ajax.status === 200;
  }
})(window, document);
