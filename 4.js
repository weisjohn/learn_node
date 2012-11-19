/*
	Concept: Hello World - SSL
*/

var tls = require('tls'), fs = require('fs');
var opts = {
  key: fs.readFileSync('privatekey.pem'),
  cert: fs.readFileSync('certificate.pem'),
  requestCert: true, // client certificate auth
  // self-signed certificate.
  ca: [ fs.readFileSync('certificate.pem') ]
};
// cts = clear text stream
var server = tls.createServer(opts, function(cts){
  cts.write("Hello World!\n");
  cts.end();
});
server.listen(443,function(){ console.log('ssl-ing') });