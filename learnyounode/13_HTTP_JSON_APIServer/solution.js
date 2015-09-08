var http = require('http'),
	url = require('url'),
    port = process.argv[2];
 
function timeToJson(time) {
	return {
		hour: time.getHours(),
		minute: time.getMinutes(),
		second: time.getSeconds()
	};
}

function timeToUnix(time) {
	return { unixtime: time.getTime() };
}

var server = http.createServer(function (req, res) {
	if(req.method != 'GET')
		return res.end('just GET requests\n');

	var parsedUrl = url.parse(req.url, true),
		time = new Date(parsedUrl.query.iso),
		result;

	if (/^\/api\/parsetime/.test(req.url))
		result = timeToJson(time);
	else if (/^\/api\/unixtime/.test(req.url))
		result = timeToUnix(time); 

    if (result) {
    	res.writeHead(200, { 'Content-Type': 'application/json' });
    	res.end(JSON.stringify(result));
    } else {
    	res.writeHead(404);
    	res.end();
    }
});

server.listen(port);
