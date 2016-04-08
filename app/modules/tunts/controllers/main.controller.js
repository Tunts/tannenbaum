'use strict';
// If you want you can create a submodule for your controller,
// set the new module as dependency of main module in the module.js file;
angular.module('tunts')
  .controller('MainCtrl', mainController);

mainController.$inject = ['$filter'];
function mainController ($filter) {
  this.awesomeThings = [
    'tunts',
    'AngularJS',
    'Karma'
  ];

  this.filtered = $filter('tuntsFilter')(this.awesomeThings[0]);
}
