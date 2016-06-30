//public/js/controllers/userctrl.js

angular.module('UserCtrl', ['AuthService'])
	.controller('UserController', function ($scope, Auth){

		$scope.users = [];
		$scope.showAll = function(){
			var req = Auth.getAll();
			req.success(function(data){
				angular.copy(data,$scope.users);
			});
		};
	});