
angular.module('AuthCtrl',['UserService'])
	.controller('AuthController', function($scope,$location, User){
		
		$scope.user = {};

		$scope.login = function(){
			console.log($scope.user.email + ' ' + $scope.user.password);
			$location.path('/');
		}

		$scope.register = function(){
			console.log($scope.user.username);
			var req = User.createUser($scope.user).success(function(data){
				console.log(data);
				$location.path('/');
			}).error(function(err){
				console.log(err);
				//TODO: Add handling to display this message;
			});
		
		}
	});