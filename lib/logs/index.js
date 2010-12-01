/**
 * Logs functions
 */

var fileSystem = require('fs');

exports.log = function(text, where){
	fileSystem.open('../SystemLogs/'+where, 'a', mode=0666, function(err,fd){
		fileSystem.write(fd, text +'\n', function(err,written){
			console.log(written);
		});
	});
 }
