var http = require('http'),
	bl = require('bl'),
	results = [],
	count = 0;

function printResults () {
	for (var i = 0; i < 3; i++)
		console.log(results[i]);
}

function httpGet(index) {
	http.get(process.argv[2 + index], function(response) {
		response.pipe(bl(function (err, data) {
			if (err)
				return console.log(err);

			results[index] = data.toString();
			count++;

			if(count == 3)
				printResults();
		}))
	})
}

for (var i = 0; i < 3; i++)
	httpGet(i);
