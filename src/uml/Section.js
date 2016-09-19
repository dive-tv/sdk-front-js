/**
* Generated On: 2016-9-19
* Class: Section
*/

function Section(){
  //Constructor

  this.modules = null;
  this.title = null;
  this.CallBack = null;
  this.ConfigModules = null;

}


/**
* @documentation: Set the Modules in this Section
*
* @param data {Object} 
* @param ConfigSection {Array} 
*/
Section.prototype.Section = function(data, ConfigSection){
  //TODO: Implement Me 

};


/**
* @documentation: Get Modules from this Section
*
*/
Section.prototype.getModules = function(){
  //TODO: Implement Me 

};


/**
* @documentation: Set a new Module on this Section
*
* @param module {Object} 
*/
Section.prototype.setModule = function(module){
  //TODO: Implement Me 

};


/**
* @param title {String} 
*/
Section.prototype.setTitle = function(title){
  //TODO: Implement Me 

};


/**
*/
Section.prototype.getTitle = function(){
  //TODO: Implement Me 

};



module.exports = {Section:Section};