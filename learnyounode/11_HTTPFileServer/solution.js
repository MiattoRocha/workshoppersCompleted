var http = require('http'),
	fs = require('fs'),
    port = process.argv[2],
    file = process.argv[3];
 
var server = http.createServer(function (req, res) {
	res.writeHead(200, { 'content-type': 'text/plain' })
	fs.createReadStream(file).pipe(res);
});

server.listen(port);



