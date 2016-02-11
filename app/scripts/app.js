'use strict';

/**
 * @ngdoc overview
 * @name testerApp
 * @description
 * # testerApp
 *
 * Main module of the application.
 */
angular
  .module('testerApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngTouch'
  ])
  .directive('bsActiveLink', ['$location', function ($location) {
      return {
        restrict: 'A', //use as attribute 
        replace: false,
        link: function (scope, elem) {
            //after the route has changed
            scope.$on('$routeChangeSuccess', function () {
                var hrefs = ['/#' + $location.path(),
                             '#' + $location.path(), //html5: false
                             $location.path()]; //html5: true
                angular.forEach(elem.find('a'), function (a) {
                    a = angular.element(a);
                    if (-1 !== hrefs.indexOf(a.attr('href'))) {
                        a.parent().addClass('active');
                    } else {
                        a.parent().removeClass('active');   
                    }
                });     
            });
        }
      };
    }
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/faq', {
        templateUrl: 'views/faq.html',
        controller: 'FaqCtrl',
        controllerAs: 'faq'
      })
      .when('/emulator', {
        templateUrl: 'views/emulator.html',
        controller: 'EmulatorCtrl',
        controllerAs: 'emulator'
      })
    // This is where the screen images start!
      .when('/acknowledgement', {
        templateUrl: 'views/screens/911acknowledge.html'
      })
      .when('/contacts', {
        templateUrl: 'views/screens/contacts.html',
      })
      .when('/dialpad', {
        templateUrl: 'views/screens/dialpad.html',
      })
      .when('/menuleft', {
        templateUrl: 'views/screens/menuleft.html',
      })
      .when('/menuright', {
        templateUrl: 'views/screens/menuright.html',
      })
      .when('/menurightgen', {
        templateUrl: 'views/screens/menurightgen.html',
      })
      .when('/menurighthelp', {
        templateUrl: 'views/screens/menurighthelp.html',
      })
      .when('/menurightvm', {
        templateUrl: 'views/screens/menurightvm.html',
      })
      .when('/messages', {
        templateUrl: 'views/screens/messages.html',
      })
      .when('/nickname', {
        templateUrl: 'views/screens/nickname.html',
      })
      .when('/prefcalloptions', {
        templateUrl: 'views/screens/prefcalloptions.html',
      })
      .when('/prefcontactmgmt', {
        templateUrl: 'views/screens/prefcontactmgmt.html',
      })
      .when('/prefmessageoptions', {
        templateUrl: 'views/screens/prefmessageoptions.html',
      })
      .when('/recentcalls', {
        templateUrl: 'views/screens/recentcalls.html',
      })
      .when('/twcapps', {
        templateUrl: 'views/screens/twcapps.html',
      })
      .when('/twcapps2', {
        templateUrl: 'views/screens/twcapps2.html',
      })
      .when('/voicemail', {
        templateUrl: 'views/screens/voicemail.html',
      })
    // If none of the above routes are called, default to this...
      .otherwise({
        redirectTo: 'emulator'
      });

      // use the HTML5 History API
      //$locationProvider.html5Mode(true);
  });
