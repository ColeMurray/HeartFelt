// server.js

//modules ===================================
var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');

// configuration =====================

//config files

var db = require('./config/db')

//set port
var port = process.env.PORT || 8080;

//connect db
//mongoose.connect(db.url);

app.use(bodyParser.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));

require('./app/routes')(app);

// start app ================================
app.listen(port);

console.log('port:' + port);

// expose app
exports = module.exports = app;

