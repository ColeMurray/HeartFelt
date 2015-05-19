angular.module('PostCtrl', [])
	.controller('PostController', function($scope){
		var populateList = function(){
			var arr = [];
			for ( i = 0; i < 15 ; i++){
				arr.push('Message here');
			}
			return arr;
		}

		$scope.posts = populateList();
	})
	.directive('banner', function() {
    	return function (scope, element, attrs) {
        	element.height(50);
    	}
	});