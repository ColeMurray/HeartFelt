// server.js

//modules ===================================
var express = require('express');
var path = require('path');
var app = express();
var port = process.env.PORT || 8080;
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');

var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');

// globals ==================================
global.__base = __dirname + '/';

// configuration ============================

var db = require('./config/db');
var tokenSecret = require('./config/tokensecret');


//connect db
mongoose.connect(db.url);


app.use(logger('dev')); //log every request to console
app.use(cookieParser()); // read cookies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));


require('./app/routes')(app,jwt);

// start app ================================
app.listen(port);

console.log('port:' + port);

// expose app
exports = module.exports = app;

