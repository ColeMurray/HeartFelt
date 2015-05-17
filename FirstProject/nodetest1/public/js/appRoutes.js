angular.module('appRoutes', [])
	.config (function ($routeProvider){
		$routeProvider
			.when('/', {
				templateUrl: 'views/home.html',
				controller: 'MainController'
			})
			
			.when ('/login', {
				templateUrl: 'views/login.html',
				controller: 'AuthCtrl'
			})
			.when ('/register', {
				templateUrl: 'views/register.html',
				controller : 'AuthCtrl'
			});
			
	});