var formidable = require('formidable');
var http = require('http');
var	url = require('url');

function start(route, handle) {
	function onRequest(request, response) {
		// var postData = '';
		var pathname = url.parse(request.url).pathname;
		console.log('Request for ' + pathname + ' received.');
		route(handle, pathname, response, request);
		// request.setEncoding('utf8');

		// request.addListener('data', function(postDataChunk) {
		// 	postData += postDataChunk;
		// 	console.log('Recieved POST data chunk "' + postDataChunk + '".');
		// });

		// request.addListener('end', function() {
		// 	route(handle, pathname, response, postData);

		// });
	
	}

	http.createServer(onRequest).listen(8888);
	console.log('Server running on port 8888');
}

exports.start = start;