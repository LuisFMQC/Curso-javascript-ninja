(function(win, doc){
  'use strict';
  /*
Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
As regras são:
- Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
diretamente;
- O input deve iniciar com valor zero;
- Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
- Deve haver 4 botões para as operações principais: soma (+), subtração(-),
multiplicação(x) e divisão(÷);
- Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
que irá limpar o input, deixando-o com valor 0;
- A cada número pressionado, o input deve atualizar concatenando cada valor
digitado, como em uma calculadora real;
- Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
operação no input. Se o último caractere no input já for um símbolo de alguma
operação, esse caractere deve ser substituído pelo último pressionado.
Exemplo:
- Se o input tem os valores: "1+2+", e for pressionado o botão de
multiplicação (x), então no input deve aparecer "1+2x".
- Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
input;
- Ao pressionar o botão "CE", o input deve ficar zerado.
*/

var $visor = doc.querySelector( '[data-id="input-visor"]' );
var $buttonsNumbers = doc.querySelectorAll( '[data-js="button-number"]' );
var $buttonCe = doc.querySelector( '[data-js="button-ce"]' );
var $buttonsOperators = doc.querySelectorAll( '[data-js="button-operation"]' );
var $buttonEqual = doc.querySelector( '[data-js="button-equal"]' );

Array.prototype.forEach.call( $buttonsNumbers, function( buttons ){
  buttons.addEventListener( 'click', clickNumber, false);
});
Array.prototype.forEach.call( $buttonsOperators, function( buttonsOp ){
  buttonsOp.addEventListener( 'click', clickOp, false );
});
$buttonCe.addEventListener( 'click', clickCe, false );
$buttonEqual.addEventListener( 'click', clickEqual, false );

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

function isLastItemAnOp(number){
  var operations = ['+', '-', 'x', '÷'];
  var lastItem = number.split( '' ).pop();
  return operations.some( function( operator ){
    return operator === lastItem;
  });
}

function clickEqual(){
  $visor.value = removeOperator( $visor.value );
  var allValues = $visor.value.match( /\d+[+x÷-]?/g );
  $visor.value = allValues.reduce( function( accumulated, actual ){
    var firstValue = accumulated.slice(0, -1);
    var operator = accumulated.split('').pop();
    var lastValue = removeOperator( actual );
    var lastOperator = isLastItemAnOp( actual ) ? actual.split( '' ).pop() : '';
    return resultOp( operator, lastOperator, firstValue, lastValue );
  })
}

function resultOp( operator, lastOperator, firstValue, lastValue ){
  switch( operator ){
    case '+':
      return ( +firstValue + +lastValue ) + lastOperator;
    case '-':
      return ( +firstValue - +lastValue ) + lastOperator;
    case 'x':
      return ( +firstValue * +lastValue ) + lastOperator;
    case '÷':
      return ( +firstValue / +lastValue ) + lastOperator;
  };
}

function removeOperator( number ){
  if(isLastItemAnOp( number ))
    return number.slice( 0, -1 );
  return number;
}

})(window, document);
