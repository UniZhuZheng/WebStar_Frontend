module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-contrib-connect');

	grunt.initConfig({
		connect: {
			server: {
				options: {
					keepalive: true,
					port: 3000,
					hostname: '*',
					base: './web/'
				}
			}
		}
	});

	grunt.registerTask('config', function (env) {
		if (env) {
			process.env.NODE_ENV = env;
		}

		if (!process.env.NODE_ENV) {
			console.error('NODE_ENV is null, exiting.');
			process.exit(1);
		}

		console.log('NODE_ENV="%s" ', process.env.NODE_ENV);

		var config = require('config');
		config.util.getConfigSources().forEach(function (item) {
			console.log('Loading ' + item.name);
		});

		var configServiceTpl = grunt.file.read('config/config.tpl');
		var configService = grunt.template.process(configServiceTpl, {
			data: {
				config: JSON.stringify(config, null, '  ').split('\n').join('\n    ')
			}
		});

		grunt.file.write('web/scripts/providers/config.js', configService);
	});

	grunt.registerTask('default', [
		'config',
		'connect'
	]);

	grunt.registerTask('zhuzheng', [
		'config:zhuzheng',
		'connect'
	]);

    grunt.registerTask('sunbo', [
        'config:sunbo',
        'connect'
    ]);
};
