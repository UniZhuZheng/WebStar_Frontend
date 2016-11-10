angular
.module('wsRoutes', [])
.provider('routes', function routesProvider() {
	this.routes = {};

	this.routes['signin'] = {
		url: '/signin',
		title: '登陆',
		templateUrl: 'views/signin.html',
		controller: 'SignInController'
	};

	this.routes['not_found'] = {
		url: '*path',
		templateUrl: 'views/404.html'
	};

	this.$get = function () {
		return this.routes;
	}
});