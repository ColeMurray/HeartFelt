angular.module('appRoutes', [])
	.config (function ($stateProvider,$urlRouterProvider, $httpProvider){
		$httpProvider.interceptors.push('SessionInterceptor');
		$urlRouterProvider.otherwise('/');

		$stateProvider

			.state('home', {
				url: '/',
				templateUrl :'views/home.html'
			})
			.state('login',{
				url:'/login',
				templateUrl : 'views/login.html',
				controller : 'AuthController'
			})
			.state('register',{
				url : '/register',
				templateUrl : 'views/register.html',
				controller : 'AuthController'
			})
			.state('post',{
				url : '/post',
				templateUrl : 'views/post.html',
				controller : 'PostController',
				
			})
			.state('post.content', {
				url : '/content/:id',
				templateUrl : 'views/post-content.html',
				controller : 'PostContentController'
			})

			.state('create', {
				url : '/create',
				templateUrl : 'views/createPost.html',
				controller : 'PostController'
			});

		});
		/*
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
			
	});*/