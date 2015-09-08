var http = require('http'),
	map = require('through2-map'),
    port = process.argv[2];
 
var server = http.createServer(function (req, res) {
	if(req.method != 'POST')
		return res.end('just POST requests\n');
	
    req.pipe(map(function (chunk) {
      return chunk.toString().toUpperCase();
    })).pipe(res)
});

server.listen(port);
