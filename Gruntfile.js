module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        less: {
            development: {
                options: {
                    paths: ['assets/css']
                },
                files: {
                    'dist/style.css': 'styles/styles.less'
                }
            }
        },
        cssmin: {
            options: {
                mergeIntoShorthands: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'dist/styles/styles.min.css': ['dist/style.css']
                }
            }
        },
        clean: ['dist/style.css'],
        watch: {
            options: {
                livereload: 1337,
            },
            css: {
                files: ['styles/*.less'],
                tasks: ['less', 'cssmin', 'clean'],
            },
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['less', 'cssmin', 'clean', 'watch']);

};