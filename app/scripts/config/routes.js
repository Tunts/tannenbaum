'use strict';
angular.module('tannenbaumApp').config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('main', {
      url: '/',
      controller: 'MainCtrl as mainCtrl',
      templateUrl: 'views/main.html'
    });
}]);
