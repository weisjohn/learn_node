/*
	Concept: Hello World - TCP
*/

var net = require('net');

var server = net.createServer(function (socket) {
  socket.write('Hello World - echoing:\r\n');
  socket.pipe(socket);
});

server.listen(1337, '127.0.0.1');