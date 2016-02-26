var through = require('through2'),
	http = require('http'),
	stream = through(write, end);

var server = http.createServer(function (req, res) {
    if (req.method === 'POST') {
        req.pipe(stream).pipe(res);
    }
});


function write (buffer, encoding, next) {
    this.push(buffer.toString().toUpperCase());
    next();
}

function end (done) {
    done();
}
server.listen(process.argv[2]);