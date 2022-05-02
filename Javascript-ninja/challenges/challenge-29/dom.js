(function(doc, win){
  'use strict';

  function DOM(elements){
    this.element = doc.querySelectorAll(elements);
    if(this.element.length === 1)
      return this.get();
    this.isArray = function isArray(obj){
      return Object.prototype.toString.call(obj) === '[object Array]';
    }

    this.isObject = function isObject(obj){
      return Object.prototype.toString.call(arguments) === '[object Object]';
    }

    this.isString = function isString(obj){
      return Object.prototype.toString.call(arguments) === '[object String]';
    }

    this.isNumber = function isNumber(obj){
      return Object.prototype.toString.call(obj) === '[object Number]';
    }

    this.isFunction = function isFunction(obj){
      return Object.prototype.toString.call(obj) === '[object Function]';
    }

    this.isBoolean = function isBoolean(obj){
      return Object.prototype.toString.call(obj) === '[object Boolean]';
    }

    this.isNull = function isNull(obj){
      return Object.prototype.toString.call(obj) === '[object Null]' || Object.prototype.toString.call(obj) === '[object Undefined]';
    }
  }

  DOM.prototype.on = function on(event, callback){
      Array.prototype.forEach.call(this.element, function(element){
        element.addEventListener(event, callback, false);
      });
    }

  DOM.prototype.off = function off(event, callback){
      Array.prototype.forEach.call(this.element, function(element){
        element.removeEventListener(event, callback, false);
      });
    }

  DOM.prototype.get = function get(index){
    if(!index)
      return this.element[0];
    return this.element[index];
    }

  DOM.prototype.forEach = function forEach(){
    return Array.prototype.forEach.apply( this.element, arguments );
  };

  DOM.prototype.map = function map(){
    return Array.prototype.map.apply( this.element, arguments );
  }

  DOM.prototype.filter = function filter(){
    return Array.prototype.filter.apply( this.element, arguments );
  }

  DOM.prototype.reduce = function reduce(){
    return Array.prototype.reduce.apply( this.element, arguments );
  }

  DOM.prototype.reduceRight = function reduceRight(){
    return Array.prototype.reduceRight.apply( this.element, arguments );
  }

  DOM.prototype.every = function every(){
    return Array.prototype.every.apply( this.element, arguments );
  }

  DOM.prototype.some = function some(){
    return Array.prototype.some.apply( this.element, arguments );
  }



  win.DOM = DOM;

})(document, window);
