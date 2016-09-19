/**
* Generated On: 2016-9-19
* Class: BaseCardDetailBuilder
*/

function BaseCardDetailBuilder(){
  //Constructor

  this.styleConfig = null;
  this.dictionary = null;
  this.listener = null;
  this.buildDefault = null;
  this.mainSectionKey = null;

}


/**
* @documentation: Fill the Modules with the data from the server, validate them and build the Card Detail.
*  cardId: the card identifier.
callback: function to be called when the card detail is done.

*
* @param cardID {String} 
* @param navigation {NativeNavigation} 
* @param customValidator? {json} 
*/
BaseCardDetailBuilder.prototype.build = function(cardID, navigation, customValidator){
  //TODO: Implement Me 

};


/**
* @documentation: Get Data from server
*
* @param param {String} 
*/
BaseCardDetailBuilder.prototype.getCardData = function(param){
  //TODO: Implement Me 

};


/**
* @documentation: Load the style configuration from a JSON file
*
* @param json
*/
BaseCardDetailBuilder.prototype.loadStyleConfig = function(json){
  //TODO: Implement Me 

};


/**
* @param data {Object} 
*/
BaseCardDetailBuilder.prototype.composeCardDetail = function(data){
  //TODO: Implement Me 

};


/**
* @param cardId {String} 
* @param listener {CardDetailListener} 
*/
BaseCardDetailBuilder.prototype.buildAll = function(cardId, listener){
  //TODO: Implement Me 

};



module.exports = {BaseCardDetailBuilder:BaseCardDetailBuilder};