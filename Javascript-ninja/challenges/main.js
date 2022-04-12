(function(win, doc){
    'use strict';
    
    var $inputUsername = doc.querySelector( '#username' );
    var $inputPassword = doc.querySelector( '#password' );
    var $button = doc.querySelector( '#button' );

    $button.addEventListener( 'submit', function(event) {
        event.preventDefault();
        console.log('click no botão');
    }, false );

})(window, document);