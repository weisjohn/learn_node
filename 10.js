/*
  Concept: Socket.IO server
*/

var app = require('http').createServer(handler)
  , io = require('socket.io').listen(app)
  , fs = require('fs');
app.listen(8080);

function handler (req, res) {
  fs.readFile(__dirname + '/11.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading 11.html');
    }
    res.writeHead(200);
    res.end(data);
  });
}

var position = { left : 0, top : 0 };
io.sockets.on('connection', function (socket) {
  socket.emit('move', position);
  socket.on('move', function (data) {
    socket.broadcast.emit("move", position = data);
  });
});