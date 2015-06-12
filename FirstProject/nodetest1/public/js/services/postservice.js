angular.module('PostService',['AuthService'])
	.factory('Post', function ($http,Auth){
		var Post = {
			getAll : function(){
				var token = Auth.getToken();
				return $http.get('/posts');
			},
			get : function(id){
				var token = Auth.getToken();
				return $http.get('/posts/' + id + '?token=' + token);
			},

			create : function(postData){
				var data = { title : postData.title,
							 content : postData.content,
							};
				console.log(data);
				return $http.post('/posts',data);
			},

			update : function(postData){
				var data = { 
					title : postData.title,
					content : postData.content
					};
				return $http.put('/posts/' + postData._id, data);		 
			},

			delete : function(id){
				console.log('Delete called');
				return $http.delete('/posts/' + id);
			}


		};

		return Post;
	});