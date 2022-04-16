(function(win, doc){
    'use strict';

    function sum(){
      return Array.prototype.reduce.call( arguments, function( acumulated, actual, index){
        return +acumulated + +actual
      });
    }

    console.log( sum(1, 2, 3, 4, 5) );

})(window, document);
