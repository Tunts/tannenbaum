'use strict';
// If you want you can create a submodule for your controller,
// set the new module as dependency of main module in the module.js file;
angular.module('tunts')
  .controller('MainCtrl', mainController);

mainController.$inject = ['$filter', 'AlertService'];
function mainController ($filter,AlertService) {
  this.awesomeThings = [
    'tunts',
    'AngularJS',
    'Karma'
  ];

  this.filtered = $filter('tuntsFilter')(this.awesomeThings[0]);

  this.options = {minDate: new Date(), maxDate: new Date('04/30/2016')};

  this.openAlert = function(msg){
    //AlertService.alertInformation(msg);
    AlertService.alertTwoOptions(options);
    //AlertService.alertConfirm(msg);
    //AlertService.alertDelete(msg);
  }

  var options = {
    title: 'Confirm',
    informationText: 'Please confirm for Pending Candidates.',
    firstOptionLabel: 'Document Review Completed',
    firstOptionIconClass: 'glyphicon glyphicon-list-alt',
    secondOptionLabel: 'Work Document Later',
    secondOptionIconClass: 'glyphicon glyphicon-remove',
    firstOptionAction: function () {
      alert('first');
    },
    secondOptionAction: function () {
      alert('second');
    }
  };
}
