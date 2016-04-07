'use strict';
module.exports = function (grunt) {
	grunt.config.set('watch', {
		html: {
			files: ['app/*.html'],
			tasks: ['rebuild', 'reload'],
			options: {
				livereload: true
			}
		},
		js: {
			files: ['app/scripts/*.js', 'app/scripts/**/*.js'],
			tasks: ['rebuild', 'reload'],
			options: {
				livereload: true
			}
		},
		css: {
			files: ['app/styles/*.scss', 'app/styles/*.sass', 'app/styles/*.css'],
			tasks: ['rebuild', 'reload'],
			options: {
				livereload: true
			}
		},
		templates: {
			files: ['app/templates/*.jade', 'app/templates/html/*.html'],
			tasks: ['rebuild', 'reload']
		}
	});
};
