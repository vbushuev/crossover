'use strict';

/* App Module */

var crossoverApp = angular.module('crossoverApp', [
  'ngRoute',
  'crossoverAnimations',
  'crossoverControllers',
  'crossoverFilters',
  'crossoverServices'
]);

crossoverApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/rows', {
        templateUrl: 'layouts/row-list.html',
        controller: 'RowListCtrl'
      }).
      otherwise({
        redirectTo: '/rows'
      });
  }]);
