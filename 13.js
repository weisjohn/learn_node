/*
  Concept: Replify
*/
var express = require('express'),
    replify = require('replify'),
    app = express();

app.get('/', function(req, res){
  res.send("value: " + app.get('value') );
});

app.listen(3000);

replify('repl', app);