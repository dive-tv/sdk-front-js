(function (module, exports) {
  'use strict';

  //Require all dependencies
  var CardDetailBuilder = require('./uml/CardDetailBuilder.js');

  //Reference to the Swagger client (API Rest without business logic)
  var Swagger = require('swagger-client')

  var url = window.location.pathname
  var splitPosition = url.lastIndexOf('/')

  if(splitPosition > -1) {
  	url = url.substring(0, splitPosition)
  }

  var l10nEN = new Intl.DateTimeFormat("en-US")
	var l10nDE = new Intl.DateTimeFormat("de-DE")
	console.log(l10nEN.format(new Date("2015-01-02")))
	console.log(l10nDE.format(new Date("2015-01-02")))



  var client = new Swagger({
	  url: `${url}/res/api-server.json`,
	  success: function() {
	    console.log(client);
	  },
	  error: function(error) {
      console.log('failed with the following: ' + error.statusText);
		}
	});

  module.exports = {Swagger: Swagger, CardDetailBuilder: CardDetailBuilder, SwaggerCli: client}


}(module, exports));