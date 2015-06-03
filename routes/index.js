var express = require('express');
var router = express.Router();
var cookieParser = require('cookie-parser');

/* GET home page. */
router.get('/', function(req, res, next) {
	if (req.cookies.flavor){
		console.log('yum,' + req.cookies.flavor);
	} else{
		res.cookie('flavor', 'banana');
	}
	res.render('index', { title: 'Twitter clone' });
});

module.exports = router;
