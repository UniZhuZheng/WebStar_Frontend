angular
.module('npApp')
.factory('AuthInterceptor', function AuthInterceptor($rootScope, $q, session) {
	return {
		request: function (request) {

			return request;
		},

		responseError: function (rejection) {
			switch (rejection.status) {
				case 401:
					$rootScope.$emit('Auth:Unauthorized');
					break;

				case 480:
					$rootScope.$emit('Auth:Unauthorized');
					break;
			}

			return $q.reject(rejection);
		}
	}
});
