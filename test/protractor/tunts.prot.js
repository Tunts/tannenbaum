'use strict';

var ScreenshotService = require('../helpers/screenshots/tunts.screen.capture');
var screenshotService = new ScreenshotService(browser, element, 'C:/Users/murilo/Pictures/SS/');

jasmine.getEnv().addReporter(new function () {
  this.specDone = function (specResult) {
    screenshotService.takeScreenshotOnFailure(specResult);
  };
  this.specStarted = function (spec) {
    element = screenshotService.takeScreenshotWhen('click', spec);
  }
});

describe('protractor', function () {

  it('prot lalala fail', function () {
    expect(1).toBe(0);
  });

  it('prot automatic ss when click', function () {
    browser.get('http://localhost:9000').then(function () {
      element.all(by.css('.glyphicon-ok')).get(0).click().then(function () {
        console.log('Captured!');
      });
    });
  });

  var spec = it('pass it like a boss', function () {
    screenshotService.takeScreenshot(spec);
    expect(1).toBe(1);
  });

});
