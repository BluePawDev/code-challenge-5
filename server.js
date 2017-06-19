/* REQUIRES: server.js */
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var index = require('./modules/routes/index');
var messages = require('./modules/routes/msgs');

/* USES: server.js */
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use('/', index);
app.use('/msgs', messages);

/* GLOBALS: server.js */
var port = process.env.PORT || 7500;


/* SERVER SPIN-UP */
app.listen(port, function() {
	console.log('Server listening on:', port);
}); // END server listening
