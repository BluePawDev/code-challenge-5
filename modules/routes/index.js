/* ROUTES: index.js */
/* REQUIRES */
var express = require('express');
var router = express.Router();
var path = require('path');

// START Base URL
router.get('/', function(req, res) {
	console.log('Base URL hit');
	res.sendFile(path.resolve('./public/views/index.html'));
}); // END Base URL

/* EXPORTS */
module.exports = router;
