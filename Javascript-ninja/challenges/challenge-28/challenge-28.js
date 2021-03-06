(function(DOM){
  'use strict';
   /*
  No HTML:
  - Crie um formulário com um input de texto que receberá um CEP e um botão
  de submit;
  - Crie uma estrutura HTML para receber informações de endereço:
  "Logradouro, Bairro, Estado, Cidade e CEP." Essas informações serão
  preenchidas com os dados da requisição feita no JS.
  - Crie uma área que receberá mensagens com o status da requisição:
  "Carregando, sucesso ou erro."
  No JS:
  - O CEP pode ser entrado pelo usuário com qualquer tipo de caractere, mas
  deve ser limpo e enviado somente os números para a requisição abaixo;
  - Ao submeter esse formulário, deve ser feito um request Ajax para a URL:
  "https://viacep.com.br/ws/[CEP]/json/", onde [CEP] será o CEP passado
  no input criado no HTML;
  - Essa requisição trará dados de um CEP em JSON. Preencha campos na tela
  com os dados recebidos.
  - Enquanto os dados são buscados, na área de mensagens de status, deve mostrar
  a mensagem: "Buscando informações para o CEP [CEP]..."
  - Se não houver dados para o CEP entrado, mostrar a mensagem:
  "Não encontramos o endereço para o CEP [CEP]."
  - Se houver endereço para o CEP digitado, mostre a mensagem:
  "Endereço referente ao CEP [CEP]:"
  - Utilize a lib DOM criada anteriormente para facilitar a manipulação e
  adicionar as informações em tela.
  */


  function app(){
  var $inputCEP = new DOM('[data-js="consultacep"]');
  var $formCEP = new DOM('[data-js="form-cep"]');
  var $logradouro = new DOM('[data-js="logradouro"]');
  var $estado = new DOM('[data-js="estado"]');
  var $cidade = new DOM('[data-js="cidade"]');
  var $bairro = new DOM('[data-js="bairro"]');
  var $cep = new DOM('[data-js="cep"]');
  var $status = new DOM('[data-js="status"]');
  var ajax = new XMLHttpRequest();
  var adress;

  $formCEP.on('submit', handleSubmitCep);

  function handleSubmitCep(event){
    event.preventDefault();
    var url = getUrl();
    ajax.open('GET', url);
    ajax.send();
    getMessages('loading');
    ajax.addEventListener('readystatechange', handleAjaxReadyStateChange);
  }

  function handleAjaxReadyStateChange(){
    if( isRequestOk() )
      fillCEPFields();
    if( isRequestNotOk() )
      erro400();
  }

  function getUrl(){
    return 'https://viacep.com.br/ws/[CEP]/json/'.replace('[CEP]', getCepClean());
  }

  function getCepClean(){
    return $inputCEP.get()[0].value.replace(/\D/g, '');
  }

  function isRequestOk(){
    return ajax.readyState === 4 && ajax.status === 200;
  }

  function isRequestNotOk(){
    return ajax.readyState === 4 && ajax.status !== 200;
  }

  function fillCEPFields(){
    adress = parseData();

    if( adress.erro === 'true'){
      getMessages('error');
      adress = clearData();
      setData(adress);
    }
    else{
      getMessages('ok');
      setData(adress);
    }
  }

  function erro400(){
    getMessages('error');
    adress = clearData();
    setData(adress);
  }


  function clearData(){
    return {
      logradouro: '-',
      uf: '-',
      localidade: '-',
      bairro: '-',
      cep: '-'
    }
  }

  function parseData(){
    var result;
    try {
      result = JSON.parse(ajax.responseText);
    }
    catch(e){
      result = null;
    }
    return result;
  }

  function getMessages(type){
      var messages = {
      loading: replaceCEP('Buscando informações para o CEP: [CEP]...'),
      ok: replaceCEP('Endereço referente ao CEP [CEP]:'),
      error: replaceCEP('Não encontramos endereço para o CEP [CEP]!')
    }
    $status.get()[0].textContent = messages[type];
  }

  function replaceCEP(message){
      return message.replace('[CEP]', getCepClean());
  }

  function setData(adress){
    $logradouro.get()[0].textContent = adress.logradouro;
    $estado.get()[0].textContent = adress.uf;
    $cidade.get()[0].textContent = adress.localidade;
    $bairro.get()[0].textContent = adress.bairro;
    $cep.get()[0].textContent = adress.cep;
  }
  return {
    getMessages: getMessages,
    replaceCep: replaceCEP
  };
}


window.app = app;
app();

})(window.DOM);


