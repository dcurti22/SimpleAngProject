// var http = require('http');
// var path = require('path');
// var fs = require('fs');
var express = require("express");
var app = express();
var oneDay = 86400000;
// app.use(express.compress());
app.use(express.static(__dirname + '/angularjs', { maxAge: oneDay }));
//app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
var port = process.env.PORT || 8080
app.listen(port);
