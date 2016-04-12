'use strict';
angular.module('common')
  .directive('crazyDatePicker', crazyDatePickerDirective);

crazyDatePickerDirective.$inject = [];
function crazyDatePickerDirective() {
  var all = [];

  return {
    restrict: 'E',
    require: 'ngModel',
    templateUrl: 'modules/common/views/CrazyDatePicker.html',
    scope: {
      model: '=ngModel',
      crazyRequired: '=crazyRequired',
      ngDisabled: '=?tntDisabled'
    },
    controller: ['$scope', function ($scope) {

      all.push($scope);

      $scope.closeOthers = function (selfScope) {
        for (var i = 0; i < all.length; i++) {
          if (selfScope !== all[i]) {
            all[i].opened = false;
          }
        }
      };
    }],
    link: function (scope) {
      if (!scope.ngDisabled) {
        scope.ngDisabled = false;
      }
      scope.open = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();

        scope.model = !scope.model ? new Date() : scope.model;

        scope.opened = true;
        scope.closeOthers(scope);

      };
    }
  };
}
