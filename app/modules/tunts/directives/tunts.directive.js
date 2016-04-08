'use strict';
// If you want you can create a submodule for your directive,
// set the new module as dependency of main module in the module.js file;
angular.module('tunts').directive('tuntsExInput', [function () {
  return {
    scope: {ngModel: '='},
    link: function (scope) {
      scope.$watch('ngModel', function (val) {
        if (String(val) === 'tunts') {
          scope.ngModel = 'TUNTS RULES!!!';
        }
      });
    }
  };
}]);
