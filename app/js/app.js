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
      when('/rows', {
        templateUrl: 'layouts/phone-list.html',
        controller: 'RowListCtrl'
      }).
      otherwise({
        redirectTo: '/rows'
      });
  }]);
