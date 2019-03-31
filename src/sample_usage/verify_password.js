var crypto = require('crypto');
var storedHash = '2bb80d537b1da3e38bd30361aa855686bde0eacd7162fef6a25fe97bf527a25b';
var password = 'secret';
var hash = crypto.createHash('sha256').update(password).digest('hex');
var isPasswordValid = (hash === storedHash);

console.log("Is Password Valid: " + isPasswordValid);
//NOTE: The password should never be hardcoded in plaintext in the source code. Here it is done for demonstration purposes.
