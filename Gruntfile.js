module.exports = function (grunt) {
    'use strict';

    grunt.loadNpmTasks('grunt-php');
	grunt.loadNpmTasks('grunt-shell');

    grunt.initConfig({
        php: {
            dist: {
                options: {
                    keepalive: true,
                    open: true,
                    port: 8085,
                    router: "index.php"
                }
            }
        },
		shell: {
            generate_static: {
                command: 'php generate'
            }
        }
    });

    grunt.registerTask('default', ['php']);
    grunt.registerTask('static', ['shell:generate_static']);
};
