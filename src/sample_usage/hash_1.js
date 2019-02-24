var crypto = require('crypto');
var password = 'secret';

var hash = crypto.createHash('sha256').update(password).digest('hex');

console.log("Hashed value = " + hash + "\n");

//var hash = crypto.createHash('sha256').update(password);
//Here the output is: Hashed value = [object Object]
