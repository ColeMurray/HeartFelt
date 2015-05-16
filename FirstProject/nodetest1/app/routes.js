//app/routes.js

/*
*
* Routes for application
*
*/

//bring in user object
var User = require('./models/user');

	module.exports = function(app){

		/*
			Api endpoints
		*/

		app.get('/users/userlist', function(req,res){
			User.find(function(err, userlist){
				if (error){
					res.send(err);
				}else{
					res.json(userlist);
				}
			});
		});

		/* 
			Front end routes
		*/

		app.get('*', function(req,res){
			res.sendFile(__dirname + '/views/index.html');
		});
	};
