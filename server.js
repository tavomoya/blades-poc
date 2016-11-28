"use strict";

var path    = require('path');
var express = require('express');
var app     = express();
var server  = require('http').createServer(app);
var q       = require('q');

app.use(express.static(path.join(__dirname, '/public')));

server.listen(3000, function () {
  console.log('Ready on port 3000!');
});