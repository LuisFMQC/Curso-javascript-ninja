(function(win, doc){
  'use strict';

  var ajax = new XMLHttpRequest();
  ajax.open('POST', 'http://localhost:3000/user');
  ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  ajax.send('username=ingrid&age=32');

  ajax.onreadystatechange = function() {
    if(ajax.readyState === 4)
      console.log('Usuário cadastrado!');
  };

  /* ajax.open('GET', 'http://localhost:3000/user/fernando');
  ajax.send();
  ajax.addEventListener('readystatechange', function(e) {
    if(ajax.readyState === 2){
      console.log('headers OK!');
      ajax.abort();
    }
    if(ajax.readyState === 4  && ajax.status === 200)
      console.log(ajax.responseText);
  }, false); */

})(window, document);
