/* ROUTES: msgs.js */
/* REQUIRES */
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

/* USES */
router.use(bodyParser.urlencoded({
	extended: true
}));
router.use(bodyParser.json());

// Connect to mongoose
mongoose.connect('localhost:27017/msgs');

// SCHEMA: messages
var msgschema = new mongoose.Schema({
	name: String,
	msg: String
}); // END messages schema

// MODEL: messages
var messages = mongoose.model('messages', msgschema);

// START /msgs GET route
// router.get('/', function(req, res) {
// 	messages.find().then(function(response) {
// 		res.send(response)
// 	}); // END messages.find()
// }); // END /msgs GET route

// START post new listing
router.post('/msgs', function(req, res) {
	console.log('POST message hit:', req.body);
	var postNewMessage = messages(req.body);
	postNewMessage.save();
	res.send('New message posted');
}); // END post new listing

/* EXPORTS */
module.exports = router;
