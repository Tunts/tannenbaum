'use strict';
angular.module('tunts').config(html5Config);

html5Config.$inject = ['$locationProvider'];
function html5Config ($locationProvider) {
  // This is just an example of another configuration file.
  $locationProvider.html5Mode(false);
}
