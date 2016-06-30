angular.module('SessionIntercept',[])
	.factory('SessionInterceptor', function($q,$window, $injector){
		var sessionInjector = {
			request : function(config){
				var token = $window.localStorage['ht-user-token'];
				if (token){
					config.headers['x-access-token'] = token;
				}
				
				return config;
			},

			responseError : function(response){
				if (response.status == 401 || response.status == 403){
					$window.localStorage.removeItem('ht-user-token');
					$injector.get('$state').go('login');
				}
				return $q.reject(response);
			}
		};
		return sessionInjector;
	});