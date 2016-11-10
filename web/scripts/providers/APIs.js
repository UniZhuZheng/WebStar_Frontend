angular
.module('wsApp')
.factory('APIs', function ($resource, $state, config, session) {
    return $resource(null, null, {
            signIn: {
                method: 'POST',
                url: config.api_uri + '/admin/signIn'
            },
            signOut: {
                method: 'POST',
                url: config.api_uri + '/admin/me/signOut'
            }
        }
    )
});
