'use strict';
// If you want you can create a submodule for your filter,
// set the new module as dependency of main module in the module.js file;
angular.module('yeoman').filter('yeomanFilter', [function () {
  return function (input) {
    return input === 'yeoman' ? 'YEOMAN FILTERED!' : input;
  };
}]);
