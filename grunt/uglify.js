'use strict';
module.exports = function(grunt) {
	grunt.config.set('uglify', {
		dist: {
			options: {
				mangle: true,
				sourceMap: false
			},
			cwd: 'dist/js/',
			dest: 'dist/js/',
			src: 'built.js',
			ext: '.js',
			expand: true
		}
	});
};