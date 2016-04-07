'use strict';
module.exports = function(grunt) {
	grunt.config.set('sass', {
		dev: {
			options: {
				style: 'nested'
			},
			files: [{
				cwd: 'app/styles/',
				dest: 'app/styles/css/',
				src: ['*.scss', '*.sass'],
				ext: '.css',
				expand: true
			}]
		}
	});
};