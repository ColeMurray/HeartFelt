
angular.module('AuthCtrl',['AuthService'])
	.controller('AuthController', function($scope,$location, $state, Auth){
		
		$scope.user = {};

		$scope.login = function(){
			console.log($scope.user.username + ' ' + $scope.user.password);
			Auth.login($scope.user).error(function(err){
				$scope.error = err;
			}).success(function(){
				$state.go('post');

			});
		};

		$scope.register = function(){
			console.log($scope.user.username);
			Auth.register($scope.user).error(function(err){
				$scope.error = err;
			}).then(function(){
				$location.path('/');
			})
		
		};
	});