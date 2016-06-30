angular.module('PostContentCtrl',['PostService'])
	.controller('PostContentController', function ($scope,$stateParams,Post){
		$scope.id = $stateParams.id;

		Post.get($scope.id).then(function(post1){
			$scope.post = post1.data;
	
		});

		$scope.update = function(){
			console.log($scope.post);
			Post.update($scope.post);
			Post.getAll();
		}


	});