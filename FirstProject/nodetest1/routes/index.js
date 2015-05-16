var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET Hello World page */
router.get('/helloworld', function(req,res,next){
	res.render('helloworld', { title: 'Hello, World!' })
});

/* GET new user Page */
router.get('/newuser', function(req,res){
	res.render('newuser', { title: 'Add new User'});
});

/*POST add user service */
router.post('/adduser', function(req,res){
	var db = req.db;
	var collection = db.get('usercollection');
	var userName = req.body.username;
	var userEmail = req.body.useremail;

	var user = {
			"username" : userName,
			"useremail" : userEmail
	};

	collection.insert(user, function (err, doc){
		if (err){
			// if entry failed, error
			res.send("Issue adding to db");
		}else{
			// if worked, change header and redirect
			res.location("userlist");
			res.redirect("userlist");
		}
	});
});


module.exports = router;
