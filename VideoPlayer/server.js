var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config')
var express = require('express');
var app = express();
var port = 3000;

var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))
app.use(express.static(__dirname+"lib"))
app.get("/", function(req, res) {
  res.sendFile(__dirname + '/index.html')
})
app.get("/about", function(req, res) {
  res.sendFile(__dirname + '/index.html')
})


app.get("/lib/jwplayer/jwplayer.js", function(req, res) {
  res.sendFile(__dirname + '/lib/jwplayer/jwplayer.js')
})
app.get("/lib/jwplayer/jw-icons.ttf", function(req, res) {
  res.sendFile(__dirname + '/lib/jwplayer/jw-icons.ttf')
})

app.get("/lib/jwplayer/jw-icons.woff", function(req, res) {
  res.sendFile(__dirname + '/lib/jwplayer/jw-icons.woff')
})

app.get("/lib/jwplayer/skins/six.css", function(req, res) {
  res.sendFile(__dirname + '/lib/jwplayer/skins/six.css')
})

app.get("/lib/jwplayer/provider.html5.js", function(req, res) {
  res.sendFile(__dirname + '/lib/jwplayer/provider.html5.js')
})

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})
