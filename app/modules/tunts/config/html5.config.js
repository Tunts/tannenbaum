'use strict';
angular.module('tunts').config(['$locationProvider', function($locationProvider) {
  // This is just an example of another configuration file.
  $locationProvider.html5Mode(false);
}]);
