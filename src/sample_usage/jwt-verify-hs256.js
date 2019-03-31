var jwt = require('jsonwebtoken');
var existingToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidGVzdHVzZXIiLCJpYXQiOjE1NTAyMjM0NzV9.PsBR5T-4j3k-IXEbVQgM0hIHy2sIisJo7OLWsYvBW3s'; 
var secretKey = 'secret-key';

const verify = jwt.verify(existingToken, secretKey);
console.log("Decoded JWT: ",verify);
//NOTE: The secretkey should never be hardcoded in plaintext in the source code. Here it is done for demonstration purposes.
