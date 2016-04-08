'use strict';
// *********************************************************************************** //
// PLEASE: Do NOT use this file to other configurations, this file is just for routes! //
// *********************************************************************************** //
angular.module('yeoman').config(['$stateProvider', '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('main', {
        url: '/',
        controller: 'MainCtrl as mainCtrl',
        templateUrl: 'modules/yeoman/views/main.html'
      });
  }]);
