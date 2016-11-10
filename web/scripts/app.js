angular
.module('wsApp', [
	'wsRoutes',
	'wsConfig',
	'wsI18n',
	'ngResource',
	'ui.router',
	'ui.bootstrap'
])
.config(function ($injector) {
	var $urlRouterProvider = $injector.get('$urlRouterProvider');
	var $stateProvider = $injector.get('$stateProvider');
	var $httpProvider = $injector.get('$httpProvider');
	var routesProvider = $injector.get('routesProvider');

	$urlRouterProvider.when('', '/');

	var routes = routesProvider.routes;
	angular.forEach(routes, function (value, key) {
		$stateProvider.state(key, routes[key]);
	});

	$httpProvider.interceptors.push('AuthInterceptor');
	$httpProvider.defaults.timeout = 10000;
})
.run(function ($injector) {
	var $rootScope = $injector.get('$rootScope');
	var $state = $injector.get('$state');
	var $stateParams = $injector.get('$stateParams');

	$rootScope.$state = $state;
	$rootScope.$stateParams = $stateParams;

	$rootScope.$on('$stateChangeSuccess',function(event, toState, toParams, fromState, fromParams){
		$('html,body').animate({scrollTop: 0}, 'fast');
	});

	$rootScope.$on('Auth:Unauthorized', function () {
		// $state.go('signin');
	});

	$rootScope.$on('Session:ParseError', function () {
		// $state.go('signin');
	});
});
