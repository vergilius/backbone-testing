module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-mocha-phantomjs');
    
    grunt.initConfig({
        mocha_phantomjs: {
            all: ['test/*.html']
        }
    });

    grunt.registerTask('test', ['mocha_phantomjs']);
};