/**
 * 
 */

var createServer = require("http").createServer;
var url = require('url');
var parse = require('url').parse
var serverUtils = require("utils");
var queryString = require("querystring");


createServer(function (request, response) {
	if (request.method == 'GET') {
		
		var contentType = 'text/html';
		var responseText = 'Hello World\n';
		
		if (url.parse(request.url).pathname.lastIndexOf('/json') > -1)
		{
			contentType = 'text/json';
			responseText = JSON.stringify({id:1, name:'Olle'});
		}
		else if (url.parse(request.url).pathname.lastIndexOf('/html') > -1)
		{
			test = ''
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