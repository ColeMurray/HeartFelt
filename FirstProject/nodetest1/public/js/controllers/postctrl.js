angular.module('PostCtrl', ['PostService'])
	.controller('PostController', function ($scope,Post){
		$scope.clicked = false;
		$scope.currpost = {};
		
		

		$scope.click = function(){
			$scope.clicked = true;
		};
		
		var getPosts = function(){
				Post.getAll().then(function(data){
					$scope.posts = data.data;
				});
		};

		getPosts();
	

		$scope.create = function(){
			Post.create($scope.currpost);
		};

		$scope.handlePost = function(){
			if (!$scope.currpost._id){
				$scope.create();
			} else {
				Post.update($scope.currpost);
			}
			getPosts();
			
		};

		$scope.setPost = function(post){

			$scope.currpost = post;
		};

		$scope.clearPost = function(){
			$scope.currpost = {};
		}

		

		
	});