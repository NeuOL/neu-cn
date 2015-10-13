module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            demo: {
                port: 8080,
                base: './'
            }
        },
        sass: {                              // Task
          dist: {                            // Target
            options: {                       // Target options
              style: 'expanded'
            },
            files: {                         // Dictionary of files
              'assets/styles/index.css': 'assets/styles/index.scss'
            }
          }
        },
        watch: {
          css: {
            files: 'assets/styles/*.scss',
            tasks: ['sass', 'includereplace']
          },
        },

        includereplace: {
            dist: {
              options: {
                prefix: '<!--',
                suffix: '-->',
                includesDir: 'include/'
              },
              src: '*.html',
              dest: 'dist/'
            }
          }

    });

    grunt.loadNpmTasks('grunt-connect');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-include-replace');

    grunt.registerTask('server', [
        'connect:demo'
    ]);
    grunt.registerTask('default', [
        'sass',
        'includereplace'
    ]);
};
