//public/js/controllers/userctrl.js

angular.module('UserCtrl', ['UserService'])
	.controller('UserController', function ($scope, User){

		$scope.users = [];
		$scope.showAll = function(){
			var req = User.getAll();
			req.success(function(data){
				angular.copy(data,$scope.users);
			});
		};
	});