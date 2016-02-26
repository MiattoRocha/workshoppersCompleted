var through = require('through2'),
	split = require('split'),
	stream = through(write, end),
	lineNumber = 1;

function write (buffer, encoding, next) {
	if(lineNumber % 2 === 0)
    	this.push(buffer.toString().toUpperCase() + '\n');
    else
    	this.push(buffer.toString().toLowerCase() + '\n');
    lineNumber++;
    next();
}

function end (done) {
    done();
}


process.stdin
	.pipe(split())
	.pipe(stream)
	.pipe(process.stdout);