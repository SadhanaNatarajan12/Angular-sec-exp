var crypto = require('crypto');
var password = '111111';

var hash = crypto.createHash('sha256').update(password).digest('hex');

console.log("Hashed value = " + hash + "\n");

//NOTE: The password should never be hardcoded in plaintext in the source code. Here it is done for demonstration purposes.
