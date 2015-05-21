angular.module('NavCtrl',['AuthService'])
	.controller('NavController', function($scope,Auth){
		$scope.loggedIn = function(){
			return false;
		};		

		$scope.logout = function(){
			Auth.logout();
		};
	})