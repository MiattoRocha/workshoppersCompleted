var fs = require('fs'),
	file = process.argv[2];

var result = fs.readFileSync(file).toString(),
	newLines = result.split('\n').length -1;

console.log(newLines);