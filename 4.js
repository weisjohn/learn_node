/*
	Concept: Hello World - HTTPS
*/

var https = require('https'), fs = require('fs');

var opts = {
  key: fs.readFileSync('privatekey.pem'),
  cert: fs.readFileSync('certificate.pem'),
  // self-signed certificate.
  ca: [ fs.readFileSync('certificate.pem') ]
}

// create an HTTPS server
https.createServer(opts, function(req, res){
  res.write("Hello World!\n");
  res.end();
}).listen(443, function(){ console.log('ssl-ing') });