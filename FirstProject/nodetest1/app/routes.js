//app/routes.js

/*
*
* Routes for application
*
*/

//bring in user object
var User = require('./models/user');
var path = require('path');
var TokenSecret = require( __base + 'config/tokensecret');

	module.exports = function(app,jwt){

		/* ****************
			Api endpoints
		*******************/

		/* 
			GET all users
		*/

		app.post('/users', function(req,res){
			User.find({},function(err, userlist){
				if (err){
					res.send(err);
				}else{
					res.json(userlist);
				}
			});
		});

		

		/*
			POST : signup new user;
		*/

		app.post('/signup', function(req,res,next){
			User.findOne({ username : req.body.username }, function(err,user1){
				if (err){
					res.send(err);
				} else if (user1) {
					res.json( { message : 'User exists'});
				} else {
					var newUser = new User();
					newUser.username = req.body.username;
					newUser.password = req.body.password;

					newUser.save(function(err){
						if (err) throw err;

						console.log ('User saved');
						res.json({success: true});
					});
				}
			});
		});

		app.post('/login', function(req,res){
			User.findOne({
				username : req.body.username
			}, function (err, user1){
				if (err)
					throw err;

				if (!user1){
					res.json({ success : false , message : 'Login Failed, User not found'});
				} else if (user1){

					if ( user1.password != req.body.password ){
						res.json( { success : false, message : 'Wrong password'});
					} else{

						//create token
						var token = jwt.sign(user1, TokenSecret.key, {
							expiresInMinutes : 1440 // 24 hours
						});

						res.json({
							success : true,
							message : 'Login successful',
							token : token
						});
					}
				}
			});
		});
		
		/* Function used to verify token */
		var verifyToken = function (req,res,next){
			console.log('YAYYY');
			var token = (req.body.token || req.query.token);

			if (token){
				jwt.verify(token,TokenSecret.key, 
					function(err,decoded){
						if (err){
							res.send(err);
						} else {
							res.decoded = decoded;
							next();
						}
					}	
				);
			
				
			}else{
				console.log('failure');
			}
		
		};
			
		

		/********************
			Front end routes
		*********************/

		app.get('*', function(req,res){
			res.sendFile(path.resolve(__dirname + '/../' + 'public/index.html'));
		});
	};
