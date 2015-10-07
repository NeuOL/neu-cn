module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            demo: {
                port: 8080,
                base: './'
            }
        }
    });

    grunt.loadNpmTasks('grunt-connect');
    grunt.registerTask('server', [
        'connect:demo'
    ]);
};
