(function(win, doc){
    'use strict';
    
    console.log('inicio');
    
    setTimeout(function(){
        console.log( 'executou setTimeout' );
    }, 1000);

    console.log('fim')

})(window, document);