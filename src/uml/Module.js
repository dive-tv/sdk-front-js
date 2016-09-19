/**
* Generated On: 2016-9-19
* Class: Module
*/

var CustomModule = require('CustomModule');

function Module(){
  //Constructor

  this.type = null;

}

Module.prototype = new CustomModule();

/**
* @documentation: Set Module type
*
* @param moduleName {String} 
*/
Module.prototype.setType = function(moduleName){
  //TODO: Implement Me 

};


/**
* @documentation: Get Module type
*
*/
Module.prototype.getType = function(){
  //TODO: Implement Me 

};


/**
* @documentation: Static method to check whether the module can be created with the given data or not.
*
* @param json
* @param moduleName {String} 
* @param args {JsonDatatypes} 
*/
Module.prototype.validate = function(json, moduleName, args){
  //TODO: Implement Me 

};



module.exports = {Module:Module};