/**
 * Server utility functions
 * Hello 
 */
var url = require('url');
var parse = require('url').parse

var _JSONTYPE = 'JSON';
var _HTMLTYPE = 'HTML';
var _TEXTTYPE = 'TEXT';
exports.JSONTYPE = _JSONTYPE;
exports.HTMLTYPE = _HTMLTYPE;
exports.TEXTTYPE = _TEXTTYPE;

exports.getResponseType = function(req){
 	var pathName = url.parse(req.url).pathname
 	if(pathName.lastIndexOf('/json') > -1){return _JSONTYPE;}
	else if(pathName.lastIndexOf('/html') > -1){return _HTMLTYPE;}
	return _TEXTTYPE;
 }