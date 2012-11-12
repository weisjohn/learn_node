/*
  Concept: Simple HTTP Proxy
*/

var express = require('express'),
    request = require('request'),
    app = express();

app.use(function(req, res, next) {
    request.get("http://johnweis.com" + req.url, 
        function(err, resp) {
        res.set(resp.headers);
        res.send(resp.body);
    });
});

app.listen(3000);