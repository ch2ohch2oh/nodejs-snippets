// a simple HTTP server

// npm install colors (not so good-looking on windows)
require('colors');

var http = require('http');
var port = 8080

var serv = http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end('<h1>OMG nodejs!</h1>');
});

// a colorful line of output
console.log(('Listening on port ' + port).rainbow);

serv.listen(port);
