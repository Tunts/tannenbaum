var fs = require('fs');

function ScreenshotService(b, e, sf) {
  var browser = b;
  var element = e;
  var screenshotFolder = sf || '';
  var self = this;

  if (!browser || typeof browser.takeScreenshot !== 'function') {
    throw 'ScreenshotService needs a browser instance, pass it as first argument in constructor';
  }

  if (!element || typeof element.all !== 'function') {
    throw 'ScreenshotService needs a element instance, pass it as second argument in constructor';
  }

  self.capture = function (path) {
    return browser.takeScreenshot().then(function (png) {
      var stream = fs.createWriteStream(path);
      stream.write(new Buffer(png, 'base64'));
      return stream.end();
    });
  };

  self.takeScreenshot = function (spec) {
    var name = spec.description.replace(/ /g, '_');
    var path = screenshotFolder + name + '-' + Date.now() + '.png';
    return self.capture(path);
  };

  self.takeScreenshotOnFailure = function (spec) {
    if (spec.failedExpectations.length) {
      return self.takeScreenshot(spec);
    }
  };

  self.takeScreenshotWhen = function (action, spec) {
    var newElement = function (locator) {
      var el = element(locator);
      var _el = element(locator);
      overrideAction(el, _el, action, spec);
      return el;
    };
    return newElement;
  };

  function overrideAction(el, _el, action, spec) {
    el[action] = function (param) {
      return _el[action](param).then(function (data) {
        self.takeScreenshot(spec);
        return data;
      });
    };
  }
}

ScreenshotService.constructor = ScreenshotService;
module.exports = ScreenshotService;

