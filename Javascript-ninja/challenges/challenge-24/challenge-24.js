(function(win, doc){
  'use strict';

  /*
Nossa calculadora agora está funcional! A ideia desse desafio é modularizar
o código, conforme vimos na aula anterior. Quebrar as responsabilidades
em funções, onde cada função faça somente uma única coisa, e faça bem feito.
- Remova as duplicações de código;
- agrupe os códigos que estão soltos em funções (declarações de variáveis,
listeners de eventos, etc);
- faça refactories para melhorar esse código, mas de forma que o mantenha com a
mesma funcionalidade.
*/

var $visor = doc.querySelector( '[data-id="input-visor"]' );
var $buttonsNumbers = doc.querySelectorAll( '[data-js="button-number"]' );
var $buttonCe = doc.querySelector( '[data-js="button-ce"]' );
var $buttonsOperators = doc.querySelectorAll( '[data-js="button-operation"]' );
var $buttonEqual = doc.querySelector( '[data-js="button-equal"]' );

function initialize(){
  initEvents();
}

function initEvents(){
  Array.prototype.forEach.call( $buttonsNumbers, function( buttons ){
    buttons.addEventListener( 'click', clickNumber, false);
  });
  Array.prototype.forEach.call( $buttonsOperators, function( buttonsOp ){
    buttonsOp.addEventListener( 'click', clickOp, false );
  });
  $buttonCe.addEventListener( 'click', clickCe, false );
  $buttonEqual.addEventListener( 'click', clickEqual, false );
}

function clickOp(){
  $visor.value = removeOperator( $visor.value );
  $visor.value += this.value;
}

function clickCe(){
  $visor.value = 0;
}

function clickNumber(){
  $visor.value !== '0' ? $visor.value += this.value : $visor.value = this.value;
}

function getOperations(){
  return Array.prototype.map.call( $buttonsOperators, function(button){
    return button.value;
  });
}

function isLastItemAnOp(string){
  var operations = getOperations();
  var lastItem = string.split( '' ).pop();
  return operations.some( function( operator ){
    return operator === lastItem;
  });
}

function removeOperator( string ){
  if(isLastItemAnOp( string ))
    return string.slice( 0, -1 );
  return string;
}

function clickEqual(){
  $visor.value = removeOperator( $visor.value );
  var regexOperations = new RegExp('\\d+[' + getOperations().join('') + ']?', 'g');
  var allValues = $visor.value.match( regexOperations );
  $visor.value = allValues.reduce( calculateAllValues );
}

function calculateAllValues( accumulated, actual ){
  var firstValue = accumulated.slice(0, -1);
  var operator = accumulated.split('').pop();
  var lastValue = removeOperator( actual );
  var lastOperator = isLastItemAnOp( actual ) ? actual.split( '' ).pop() : '';
  return resultOp( operator, firstValue, lastValue ) + lastOperator;
}

function resultOp( operator, firstValue, lastValue ){
  switch( operator ){
    case '+':
      return  +firstValue + +lastValue;
    case '-':
      return  +firstValue - +lastValue;
    case 'x':
      return  +firstValue * +lastValue;
    case '÷':
      return  +firstValue / +lastValue;
  };
}

initialize();

})(window, document);
