angular.module('PostService',['AuthService'])
	.factory('Post', function ($http,Auth){
		var Post = {
			getAll : function(){
				var token = Auth.getToken();
				return $http.get('/posts?token=' + token);
			},
			get : function(id){
				var token = Auth.getToken();
				return $http.get('/posts/' + id + '?token=' + token);
			},

			create : function(postData){
				var token = Auth.getToken();
				var data = { title : postData.title,
							 content : postData.content,
							 token : token
							};
				console.log(data);
				return $http.post('/posts', data);
			}
		};

		return Post;
	});