var jwt = require('jsonwebtoken');
var secretKey = 'secret-key';
var payload = {
  name: 'testuser'
};
var newToken = jwt.sign(payload, secretKey, {
    algorithm: 'HS256'
});
console.log("JWT created:", newToken);
//NOTE: The secretkey should never be hardcoded in plaintext in the source code. Here it is done for demonstration purposes.
