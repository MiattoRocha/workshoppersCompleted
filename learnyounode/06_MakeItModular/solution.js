var mymodule = require('./solutionModule.js'),
	dir = process.argv[2],
	ext = process.argv[3];	

mymodule(dir, ext, function(err, data){
	if(err)
		return console.error('There was an error:', err);

	data.forEach(function(result){
		console.log(result);
	})
});