'use strict';
module.exports = function(grunt) {
	grunt.config.set('ngAnnotate', {
		options: {
			singleQuotes: true
		},
		dist: {
			files: [
				{
					expand: true,
					src: ['dist/js/built.js']
					//rename: function (dest, src) { return src + '-annotated'; }
				}
			]
		}
	});
};