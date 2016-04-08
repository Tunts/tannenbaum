'use strict';
// If you want you can create a submodule for your service,
// set the new module as dependency of main module in the module.js file;
angular.module('yeoman').service('yeomanService', [function () {
  var counter = 0;

  this.increment = function () {
    counter++;
  };

  this.count = function () {
    return counter;
  };

}]);
