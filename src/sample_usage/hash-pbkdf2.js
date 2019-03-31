var crypto = require('crypto');
var password = "D0ntShar3";

crypto.randomBytes(256, function(err, salt) {
    crypto.pbkdf2(password, salt, 10000, 512, 'sha256', 
	function(err, hash) {
	    console.log("PBKDF2 output: " + hash.toString('hex'));
	});
});

//NOTE: The password should never be hardcoded in plaintext in the source code. Here it is done for demonstration purposes.
