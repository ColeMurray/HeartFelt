angular.module('appRoutes', [])
	.config (function ($routeProvider){
		$routeProvider
			.when('/', {
				templateUrl: 'views/home.html',
				controller: 'MainController'
			})
			
			.when ('/login', {
				templateUrl: 'views/login.html',
				controller: 'AuthController'
			})
			.when ('/register', {
				templateUrl: 'views/register.html',
				controller : 'AuthController'
			})
			.when('/userlist', {
				templateUrl: 'views/users.html',
				controller : 'UserController'
			})
			.when ('/post' , {
				templateUrl : 'views/post.html',
				controller : 'PostController'
				
			})
			.when('/create',{
				templateUrl : 'views/createPost.html'
			});
			
	});