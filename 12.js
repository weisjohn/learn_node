var express = require('express'),
    http = require('http'),
    app = express();
server = http.createServer(app);

app.get('/health', function(req, res){
    res.send({
        pid: process.pid,
        memory: process.memoryUsage(),
        uptime: process.uptime(),
        connections: server.connections
    });
});

server.listen(3000);