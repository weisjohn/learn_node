/*
	Concept: Debug module
*/

var express = require('express'),
	request = require('request'),
	debug_express = require('debug')('express'),
	debug_request = require('debug')('request');

var app = express();

app.use(function(req, res, next) {
	
});

app.listen(3000);