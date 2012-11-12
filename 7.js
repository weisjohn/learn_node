/*
  Concept: Server Health
*/
var express = require('express'),
    request = require('request'),
    app = express();

// # Middleware, not blocking, potentially a bottleneck
app.use(function(req, res, next) {

  var requests = app.get('requests');
  if (!requests) requests = 1;
  app.set('requests', ++requests);

  next();
});

app.get('/health', function(req, res){
  res.send({
    pid: process.pid,
    memory: process.memoryUsage(),
    uptime: process.uptime(),
    requests: app.get('requests')
  });
});

app.listen(3000);