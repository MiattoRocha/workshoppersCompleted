var spawn = require('child_process').spawn; 
var duplexer = require('duplexer2'); 
 
module.exports = function (cmd, args) { 
    var spw = spawn(cmd, args); 
    return duplexer(spw.stdin, spw.stdout); 
}; 
