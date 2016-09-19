/**
* Generated On: 2016-9-19
* Class: ConfigSection
*/

var ConfigModule = require('ConfigModule');

function ConfigSection(){
  //Constructor

  this.modules = null;
  this.title = null;
  this.main = null;

}


/**
* @documentation: Add new Module to the Section
*
* @param moduleName {String} 
*/
ConfigSection.prototype.addModule = function(moduleName){
  //TODO: Implement Me 

};


/**
* @documentation: Add a new Navigation Module to another Section
*
* @param targetSection {String} Target Section
* @param moduleName {String} Text in the button
*/
ConfigSection.prototype.addNavigation = function(targetSection, moduleName){
  //TODO: Implement Me 

};


/**
* @documentation: Load the Modules style configuration
*
*/
ConfigSection.prototype.getModulesConfig = function(){
  //TODO: Implement Me 

};


/**
* @param title {String} 
*/
ConfigSection.prototype.setTitle = function(title){
  //TODO: Implement Me 

};


/**
*/
ConfigSection.prototype.getTitle = function(){
  //TODO: Implement Me 

};


/**
* @param main {boolean} 
*/
ConfigSection.prototype.setMain = function(main){
  //TODO: Implement Me 

};


/**
*/
ConfigSection.prototype.isMain = function(){
  //TODO: Implement Me 

};



module.exports = {ConfigSection:ConfigSection};