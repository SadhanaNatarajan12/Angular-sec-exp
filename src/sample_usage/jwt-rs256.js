var jwt = require('jsonwebtoken');
var fs = require('fs');
var privatekey = fs.readFileSync('./src/sample_usage/private.key');
var payload = {
    name:'testuser'
};
var token = jwt.sign(payload, privatekey, {
    algorithm: 'RS256',
    expiresIn: 120,
    subject: "1"
}); 
console.log('RSA 256 JWT: ', token);
