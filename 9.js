/*
  Concept: Simple HTTP Proxy
*/

var express = require('express'),
  request = require('request'),
  debug_express = require('debug')('express'),
  debug_request = require('debug')('request'),
  app = express();

app.use(function(req, res, next) {
  debug_express('proxy: ' + req.url);
  debug_request('request');
  request.get("http://johnweis.com" + req.url, 
  function(err, resp) {
    debug_request('response');
    res.set(resp.headers);
    res.send(resp.body);
    debug_express('done: ' + req.url);
  });
});

app.listen(3000);