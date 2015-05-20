angular.module('PostCtrl', ['PostService'])
	.controller('PostController', function ($scope,Post){
		$scope.clicked = false;
		$scope.currpost = {};
		

		$scope.click = function(){
			$scope.clicked = true;
		};
		
		Post.getAll().then(function(data){
				$scope.posts = data.data;

		});

		$scope.create = function(){
			Post.create($scope.currpost);
		}
		

		
	});