//app/routes.js

/*
*
* Routes for application
*
*/

//bring in user object
var User = require('./models/user');
var path = require('path');

	module.exports = function(app){

		/* ****************
			Api endpoints
		*******************/

		/* 
			GET all users
		*/
		app.get('/users', function(req,res){
			User.find({},function(err, userlist){
				if (err){
					res.send(err);
				}else{
					res.json(userlist);
				}
			});
		});

		/*
			POST : new user
		*/

		app.post('/users', function(req,res){
			var user = new User();
			user.username = req.body.username;
			user.password = req.body.password;

			user.save(function(err){
				if (err){
					res.send(err);
				}else{
					res.json({ message : 'User created'});
				}
			});
		});

		/********************
			Front end routes
		*********************/

		app.get('*', function(req,res){
			res.sendFile(path.resolve(__dirname + '/../' + 'public/index.html'));
		});
	};
