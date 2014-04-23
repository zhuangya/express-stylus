'use strict';

var express = require('express');
var serveStatic = require('serve-static');
var stylus = require('stylus');

var app = express();

app.set('view engine', 'jade');

app.use('/css', stylus.middleware({
  src: __dirname + '/stylus',
  dest: __dirname + '/public/css',
  compile: function (str, path) {
    return stylus(str)
      .set('filename', path)
      .set('compress', true);
  }
}));

app.use(serveStatic(__dirname + '/public'));

app.get('/', function (req, res) {
  res.render('index', {
    title: 'stylus and jade rock!'
  });
});

app.listen(3000);