'use strict';
// jscs:disable requireCamelCaseOrUpperCaseIdentifiers
/* jshint shadow:true */
/*jshint multistr: true */
/*jshint laxbreak:true */
// jshint maxstatements:99
// jshint maxcomplexity:99
module.exports = function(grunt) {

	grunt.initConfig({
		less: {
			development:{
				//files: {
				//	'dist/css/built.css': ['app/modules/assets/css/**/*.less', 'app/modules/assets/css/**/*.css']
				//}
			}
		},
		watch: {
			development: {
				files: ['app/modules/**/*'],
				tasks: ['build']
			},
			livereload:{
				options: { livereload: true },
				files: ['dist/**/*']
			}
		},
		connect: {
			server: {
				options: {
					hostname: '127.0.0.1',
					port: 8000,
					base: 'dist',
					open:true,
					livereload:true
				}
			}
		}
	});

	require('load-grunt-tasks')(grunt);
	require('./grunt/clean')(grunt);
	require('./grunt/concat')(grunt);
	require('./grunt/copy')(grunt);
	require('./grunt/uglify')(grunt);
	require('./grunt/jshint')(grunt);
	require('./grunt/hashres')(grunt);
	require('./grunt/ng-annotate')(grunt);

	grunt.registerTask('serve', function() {
		grunt.task.run(['jshint', 'clean', 'copy','concat','ngAnnotate','uglify','less', 'hashres','connect','watch']);
	});

	grunt.registerTask('check-hint', function() {
		grunt.task.run(['jshint']);
	});
	grunt.registerTask('build', function() {
		grunt.task.run(['jshint', 'clean', 'copy','concat','ngAnnotate','uglify','less', 'hashres']);
	});
	grunt.registerTask('build-concat', function() {
		grunt.task.run(['clean', 'concat', 'copy']);
	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
};
