
/**
 * Module dependencies.
 */

var express = require('express')
  // , routes = require('./routes')
  , http = require('http');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

// no route specified
app.use(function(req, res, next) {
	console.log('middleware');
	next();
});

app.get('/foo', function(req, res){
	res.render('index', { title: 'foo' });
});

app.get('/bar', function(req, res){
	res.render('index', { title: 'bar' });
});

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
