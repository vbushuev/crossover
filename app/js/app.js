'use strict';

/* App Module */

var crossoverApp = angular.module('crossoverApp', [
  'ngRoute',
  'crossoverAnimations',
  'crossoverControllers',
  'crossoverFilters',
  'crossoverServices'
]);

phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/phones', {
        templateUrl: 'partials/phone-list.html',
        controller: 'PhoneListCtrl'
      }).
      when('/phones/:phoneId', {
        templateUrl: 'partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
      }).
      otherwise({
        redirectTo: '/phones'
      });
  }]);
