'use strict';
// If you want you can create a submodule for your controller,
// set the new module as dependency of main module in the module.js file;
angular.module('yeoman')
  .controller('MainCtrl', [function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
