'use strict';

/* Controllers */

var crossoverControllers = angular.module('crossoverControllers', []);

crossoverControllers.controller('RowListCtrl', ['$scope', 'Row',
  function($scope, Row) {
    $scope.rows = Row.query();
  }]);
crossoverControllers.controller("UnitTestCtrl", ['$scope','Row',function ($scope,Row) {
  $scope.labels = ["p1", "p2"];
  $scope.data = [73, 27];
}]);
crossoverControllers.controller("FunctionalTestCtrl", ['$scope','Row',function ($scope,Row) {
  $scope.labels = ["p1", "p2"];
  $scope.data = [68, 32];
}]);
