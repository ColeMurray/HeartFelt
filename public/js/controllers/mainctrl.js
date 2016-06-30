//public/js/controllers/mainctrl.js

angular.module('MainCtrl', ['AuthService'])
	.controller('MainController', function($scope, Auth, $state){
			if (Auth.isLoggedIn()){
				$state.go('post');
			}
	});