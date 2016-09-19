/**
* Generated On: 2016-9-19
* Class: CardDetailJson
*/

var CardDetail = require('CardDetail');

var BaseCardDetailBuilder = require('BaseCardDetailBuilder');

var ConfigSection = require('ConfigSection');

function CardDetailJson(){
  //Constructor

  this.config = null;

}

CardDetailJson.prototype = new BaseCardDetailBuilder();

/**
*/
CardDetailJson.prototype.CardDetailJson = function(){
  //TODO: Implement Me 

};


/**
* @documentation: Load Sections and Modules order directly from a JSON file
*
* @param json
*/
CardDetailJson.prototype.loadDataConfig = function(json){
  //TODO: Implement Me 

};



module.exports = {CardDetailJson:CardDetailJson};