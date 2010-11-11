/**
 * Handles urls in the REST format like:
 * /me/users/json 
 * /me/users/html 
 */

var createServer = require("http").createServer;
var url = require('url');
var parse = require('url').parse


var serverUtils = require('./utils');
var logs = require('./logs');
 


createServer(function (request, response) {
	if (request.method == 'GET') {
		
		var contentType = 'text/html';
		var responseText = 'Hello brave new html world'
		var responseType = serverUtils.getResponseType(request);
		
		if (responseType == serverUtils.JSONTYPE)
		{
			contentType = 'text/json';
			responseText = JSON.stringify({id:1, name:'Olle'});
			logs.log(JSON.stringify({id:1, name:'Olle'}),'json.txt');
		}
		else if (responseType == serverUtils.TEXTTYPE)
		{
			contentType = 'text';
			responseText = 'Hello txt world'
			logs.log(responseText,'text.txt');
		}
		response.writeHead(200, {
			'Content-Type': contentType,
			"Content-Length": responseText.length
		});
		response.end(responseText);
	}
	else if (request.method == 'POST')
	{
		request.body = '';
	    request.addListener('data', function (chunk) {
	       
	      })
	      .addListener('end', function () {
				
	      });
	}
}).listen(8080);

console.log('Running at http://127.0.0.1:8080/');