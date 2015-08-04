var fs = require('fs'),
	file = process.argv[2];

fs.readFile(file, function(err, data){
		var result = data.toString();
		var newLines = result.split('\n').length -1;
		console.log(newLines);
});
