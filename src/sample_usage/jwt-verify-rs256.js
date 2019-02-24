var jwt = require('jsonwebtoken');
var fs = require('fs');
var existingToken = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidGVzdHVzZXIiLCJpYXQiOjE1NTAyMzU3NTgsImV4cCI6MTU1MDIzNTg3OCwic3ViIjoiMSJ9.MSWJot8yNuhmJKt6hMQrXlr2CY0nkhvF0SKndFSgivGk8rpfG7B4MGvFeogjR2VvfZpXPKcUpuYNAapgjPy9nJLFQ8xJUFBqiMMn0Irt3tVjzjbyPO-EHbWXBe7elby7TPH6tHnDl76NMc2WJh8VQIcRvZkiP0DxG7TGZxN751k';

var publickey = fs.readFileSync('./src/sample_usage/public.key');
console.log('Verifying JWT token: Algo: RS256');

const verify = jwt.verify(existingToken, publickey);

console.log('Decoded JWT: ', verify);
