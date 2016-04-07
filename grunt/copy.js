'use strict';
module.exports = function(grunt) {
	grunt.config.set('copy', {
		index: {
			cwd: 'app/',
			src: 'index_dist.html',
			dest: 'dist/',
			rename: function(dest, src) {
				return dest + src.replace('_dist', '');
			},
			expand: true
		},
		base_html: {
			cwd: 'app/views/',
			src: '**/*.html',
			dest: 'dist/views/',
			expand: true
		},
    images: {
      cwd: 'app/images/',
      src: '**/*',
      dest: 'dist/images/',
      expand: true
    },
		bootstrap_css: {
			cwd: 'bower_components/bootstrap/dist/css/',
			src: 'bootstrap.min.css',
			dest: 'dist/lib/css/',
			expand: true
		},
		bootstrap_theme_css: {
			cwd: 'bower_components/bootstrap/dist/css/',
			src: 'bootstrap-theme.min.css',
			dest: 'dist/lib/css/',
			expand: true
		},
		font_awesome_css: {
			cwd: 'bower_components/components-font-awesome/css/',
			src: 'font-awesome.min.css',
			dest: 'dist/lib/css/',
			expand: true
		},
		font_awesome_fonts: {
			cwd: 'bower_components/components-font-awesome/fonts/',
			src: '**/*',
			dest: 'dist/lib/fonts/',
			expand: true
		},
    bootstrap_fonts: {
      cwd: 'bower_components/bootstrap/fonts',
      src: '**/*',
      dest: 'dist/lib/fonts/',
      expand: true
    }

	});
};
