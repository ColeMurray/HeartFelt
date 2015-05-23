angular.module('NavCtrl',['AuthService'])
	.controller('NavController', function($scope,Auth){
		$scope.loggedIn = Auth.isLoggedIn;	

		$scope.logout = function(){
			Auth.logout();
		};
	})