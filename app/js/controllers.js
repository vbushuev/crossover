'use strict';

/* Controllers */

var crossoverControllers = angular.module('crossoverControllers', []);

crossoverControllers.controller('RowListCtrl', ['$scope', 'Row',
  function($scope, Row) {
    $scope.phones = Row.query();
    $scope.orderProp = 'age';
  }]);

crossoverControllers.controller('RowDetailCtrl', ['$scope', '$routeParams', 'Row',
  function($scope, $routeParams, Row) {
    $scope.phone = Row.get({rowId: $routeParams.rowId}, function(row) {
      $scope.mainImageUrl = row.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    };
  }]);
