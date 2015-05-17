// public/js/services/userservice.js

/* 
	Service to create user's through rest api 

*/

angular.module('UserService', [])
	.factory('User', function ($http){
		var User = {
			
			/* Get all users */

			getAll : function(){
				
				return $http.get('/users');
			},
			/* 
				Create new user
			*/
			createUser : function(userData) {
				return $http.post('/users/', userData);
			},

			/* 
				Delete a user 
			*/
			delete : function(id){
				return $http.delete('/users/' + id);
			}




		};
		return User;
	});