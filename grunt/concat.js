'use strict';
module.exports = function (grunt) {
    grunt.config.set('concat', {
            options: {
                // define a string to put between each file in the concatenated output
                separator: ''
            },
            vendors: {
                // the files to concatenate
                src: ['bower_components/angular/angular.js',
                    'bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
                    'bower_components/angular-ui-router/release/angular-ui-router.min.js',
                    'bower_components/jquery/dist/jquery.min.js',
                    'bower_components/moment/moment.js'
                ],
                // the location of the resulting JS file
                dest: 'dist/lib/js/vendors.js'
            },
            dist: {
                // the files to concatenate
                src: [
                  'app/modules/app.js',
                  'app/modules/*/*.js',
                  'app/modules/*/*/**.js',
                  '!app/modules/*/*/**.test.js'
                ],
                // the location of the resulting JS file
                dest: 'dist/js/built.js'
            },
            dist_css: {
                // the files to concatenate
                src: ['app/styles/**/*.css'],
                // the location of the resulting JS file
                dest: 'dist/styles/built.css'
            }
        }
    );
};
