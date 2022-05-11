(function($) {
    'use strict';
  
    /*
    Vamos estruturar um pequeno app utilizando módulos.
    Nosso APP vai ser um cadastro de carros. Vamos fazê-lo por partes.
    A primeira etapa vai ser o cadastro de veículos, de deverá funcionar da
    seguinte forma:
    - No início do arquivo, deverá ter as informações da sua empresa - nome e
    telefone (já vamos ver como isso vai ser feito)
    - Ao abrir a tela, ainda não teremos carros cadastrados. Então deverá ter
    um formulário para cadastro do carro, com os seguintes campos:
      - Imagem do carro (deverá aceitar uma URL)
      - Marca / Modelo
      - Ano
      - Placa
      - Cor
      - e um botão "Cadastrar"
    Logo abaixo do formulário, deverá ter uma tabela que irá mostrar todos os
    carros cadastrados. Ao clicar no botão de cadastrar, o novo carro deverá
    aparecer no final da tabela.
    Agora você precisa dar um nome para o seu app. Imagine que ele seja uma
    empresa que vende carros. Esse nosso app será só um catálogo, por enquanto.
    Dê um nome para a empresa e um telefone fictício, preechendo essas informações
    no arquivo company.json que já está criado.
    Essas informações devem ser adicionadas no HTML via Ajax.
    Parte técnica:
    Separe o nosso módulo de DOM criado nas últimas aulas em
    um arquivo DOM.js.
    E aqui nesse arquivo, faça a lógica para cadastrar os carros, em um módulo
    que será nomeado de "app".
    */
  
    function app(){
      

      return {
        init: function init(){
          this.autoAjaxCompany();
          this.initEvents();
        },
        
        initEvents: function initEvents(){
          $('[data-js="form-cars"]').on('submit', this.handleSubmitCar);
        },
        
        handleSubmitCar: function handleSubmitCar(event){
          event.preventDefault();
          var $tableCar = $('[data-js="table-cars"]').get();
          $tableCar.appendChild(app().createNewCar());
          app().removeCar();
        },
  
        createNewCar: function createNewCar(){
          var $fragment = document.createDocumentFragment();
          var $tr = document.createElement('tr');
          var $image = document.createElement('img');
          var $tdImage = document.createElement('td');
          var $tdBrand = document.createElement('td');
          var $tdModel = document.createElement('td');
          var $tdYear = document.createElement('td');
          var $tdColor = document.createElement('td');
          var $tdPlate = document.createElement('td');
          var $tdRemove = document.createElement('td');
          var $remove = document.createElement('button');
          
          $remove.textContent = 'Remove';
          $remove.setAttribute('class', 'remove');
          $tdRemove.appendChild($remove);
          $tdRemove.setAttribute('data-js', 'remove');
          
          
          $image.src = $('[data-js="url"]').get().value;
          $tdImage.appendChild($image);
          
          $tdBrand.textContent = $('[data-js="marca"]').get().value;
          $tdModel.textContent = $('[data-js="modelo"]').get().value;
          $tdYear.textContent = $('[data-js="ano"]').get().value;
          $tdColor.textContent = $('[data-js="cor"]').get().value;
          $tdPlate.textContent = $('[data-js="placa"]').get().value;
          
          $tr.appendChild($tdImage);
          $tr.appendChild($tdBrand);
          $tr.appendChild($tdModel);
          $tr.appendChild($tdYear);
          $tr.appendChild($tdPlate);
          $tr.appendChild($tdColor);
          $tr.appendChild($tdRemove);
                   
          return $fragment.appendChild($tr);
        },
        
        removeCar: function removeCar(){
          $('[class="remove"]').on('click', app().handleRemoveCar);
        }, 

        handleRemoveCar: function handleRemoveCar(event){
         event.target.parentNode.parentNode.remove();      
        },
        
        autoAjaxCompany: function autoAjaxCompany(){
          var ajaxCompany = new XMLHttpRequest();
          ajaxCompany.open('GET', 'company.json', true);
          ajaxCompany.send();
          ajaxCompany.addEventListener('readystatechange', this.getDataEmp, false);
          },
  
        getDataEmp: function getDataEmp(){
          if( !app().isRequestOk.call(this) )
            return;
          var dataEmp = JSON.parse(this.responseText);
          var $company = $('[data-js="nome-empresa"]');
          var $phone = $('[data-js="telefone-empresa"]');
          $company.get().textContent = dataEmp.name;
          $phone.get().textContent = dataEmp.phone;
          },
  
        isRequestOk: function isRequestOk(){
          return this.status === 200 && this.readyState === 4;
          }
        };
    }
  
  app().init();
  
  
  })(window.DOM);