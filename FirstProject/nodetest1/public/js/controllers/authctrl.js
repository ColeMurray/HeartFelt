
angular.module('AuthCtrl',[])
	.controller('AuthController', function($scope,$location){
		
		$scope.user = {};

		$scope.login = function(){
			console.log($scope.user.email + ' ' + $scope.user.password);
			$location.path('/');
		}
	});