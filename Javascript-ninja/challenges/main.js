(function(win, doc){
  'use strict';

  var ajax = new XMLHttpRequest();
  ajax.open('GET', 'http://localhost:3000/user/fernando');
  ajax.send();
  ajax.addEventListener('readystatechange', function(e) {
    if(ajax.readyState === 2){
      console.log('headers OK!');
      ajax.abort();
    }
    if(ajax.readyState === 4 /* && ajax.status === 200 */)
      console.log(ajax.responseText);
  }, false);

})(window, document);
