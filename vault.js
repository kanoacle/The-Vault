'use strict';
module.exports = function() {

  var vault = {};

  function setValue(key, value){
    vault[key] = value;
    }

  function getValue(key){
    if(vault[key] === undefined){
      return null;
    }
    return vault[key];
  }
  return {
    setValue: setValue,
    getValue: getValue
  };
};