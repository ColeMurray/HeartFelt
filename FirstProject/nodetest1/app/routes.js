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
		app.get('/users/', function(req,res){
			User.find(function(err, userlist){
				if (error){
					res.send(err);
				}else{
					res.json(userlist);
				}
			});
		});

		/*
			POST : new user
		*/

		app.post('/users/', function(req,res){
			// do something
		});

		/********************
			Front end routes
		*********************/

		app.get('*', function(req,res){
			res.sendFile(path.resolve(__dirname + '/../' + 'public/index.html'));
		});
	};
