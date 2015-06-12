angular.module('PostCtrl', ['PostService'])
	.controller('PostController', function ($scope,$timeout,Post){
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
			var p = Post.create($scope.currpost).success(function(data){
				$scope.currpost = data;
			});
			console.log(p);
		};

		$scope.delete = function(post, index){
			Post.delete(post._id).success(function(data){
				$scope.posts.splice(index,1);
				$scope.currpost = {};
			});
			console.log('Delete called!!');
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
		};

		$scope.newPost = function(){
			$scope.clearPost();
			$scope.create();
		}

		var timeout = null;
		var saveUpdates = function(){
			$scope.handlePost();
		};

		var debounceSaveUpdates = function(newVal, oldVal){
			if (newVal != oldVal){
				if (timeout){
					$timeout.cancel(timeout);
				}
				timeout = $timeout(saveUpdates,1000); //1000 = 1 second
			}
		};
		$scope.$watch('currpost.title', debounceSaveUpdates);
		$scope.$watch('currpost.content', debounceSaveUpdates);

		

		
	});