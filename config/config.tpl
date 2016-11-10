angular
.module('wsConfig', [])
.provider('config', function configProvider() {
    var config = <%= config %>;

    this.$get = function () {
        return config;
    }
});