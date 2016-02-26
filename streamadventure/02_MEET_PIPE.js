var fs = require('fs'),
	file = process.argv[2];

fs.createReadStream(file).pipe(process.stdout);