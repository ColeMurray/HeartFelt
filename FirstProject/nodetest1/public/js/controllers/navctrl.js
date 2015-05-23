angular.module('NavCtrl',['AuthService'])
	.controller('NavController', function($scope,Auth, $state){
		$scope.loggedIn = Auth.isLoggedIn;	

		$scope.logout = function(){
			Auth.logout();
			$state.go('home');
		};
	})