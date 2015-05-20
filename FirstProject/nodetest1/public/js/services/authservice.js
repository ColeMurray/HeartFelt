// public/js/services/userservice.js

/* 
	Service to create user's through rest api 

*/

angular.module('AuthService', [])
	.factory('Auth', function ($http,$window){
		var auth = {

			saveToken : function(token){
				$window.localStorage['ht-user-token'] = token;
			},

			getToken : function(){
				var token =  $window.localStorage['ht-user-token'];
				return token;
			},
			
			/* Get all users */

			getAll : function(){
				
				return $http.get('/users');
			},
			/* 
				Register new user
			*/
			register : function(userData) {
				return $http.post('/register', userData)
					.success(function(data){
						auth.saveToken(data.token);
					});
			},

			/* Login user */
			login : function(userData){
				return $http.post('/login', userData).success(function(data){
					auth.saveToken(data.token);
				});
			},

			logout : function(){
				$window.localStorage.removeItem('ht-user-token');
			},

			isLoggedIn : function(){
				var token = auth.getToken();

				if (token){
					jwt.verify(token,TokenSecret.key, 
						function(err,decoded){
							if (err){
								return false;
							} else {
								return true;
							}
						});
				} else{
					return false;
				}
			},

			/* 
				Delete a user 
			*/
			delete : function(id){
				return $http.delete('/users/' + id);
			}




		};
		return auth;
	});