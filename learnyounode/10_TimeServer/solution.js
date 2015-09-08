var net = require('net'),
    port = process.argv[2];

function formatZero(i){
	return (i < 10 ? '0' : '') + i;
}
 
function getStrDate (){
	var d = new Date();
	return d.getFullYear() + '-'
	+ formatZero(d.getMonth() + 1) + '-'
	+ formatZero(d.getDate()) + ' '
	+ formatZero(d.getHours()) + ':'
	+ formatZero(d.getMinutes())
	+ '\n';
}

var server = net.createServer(function (socket) {
	socket.end(getStrDate());
});

server.listen(port);



