'use strict';
// If you want you can create a submodule for your directive,
// set the new module as dependency of main module in the module.js file;
angular.module('yeoman').directive('yeomanExInput', [function () {
  return {
    scope: {ngModel: '='},
    link: function (scope) {
      scope.$watch('ngModel', function (val) {
        if (String(val) === 'yeoman') {
          scope.ngModel = 'YEOMAN RULES!!!';
        }
      });
    }
  };
}]);
