'use strict';

describe('Controller: EmulatorCtrl', function () {

  // load the controller's module
  beforeEach(module('testerApp'));

  var EmulatorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EmulatorCtrl = $controller('EmulatorCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EmulatorCtrl.awesomeThings.length).toBe(3);
  });
});
