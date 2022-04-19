(function(win, doc){
    'use strict';

    console.time('Calculando tempo do for');
    for(var i = 0; i < 10000; i++){
      console.log( 'calculando...' );
    }

    console.timeEnd('Calculando tempo do for');

})(window, document);
