angular
.module('wsI18n', [])
.provider('i18n', function i18nProvider() {
    var i18n_data = {
        'en': {

        },
        'cn': {

        }
    };

    this.get = function(lang, key) {
        if (!lang || lang === '') {
            lang = 'en';
        }

        return i18n_data[lang][key];
    };

    this.$get = function() {
        return this.get;
    }
});