'use strict';

/* Controllers */

var crossoverControllers = angular.module('crossoverControllers', []);

crossoverControllers.controller('RowListCtrl', ['$scope', 'Phone',
  function($scope, Row) {
    $scope.phones = Row.query();
    $scope.orderProp = 'age';
  }]);

crossoverControllers.controller('RowDetailCtrl', ['$scope', '$routeParams', 'Row',
  function($scope, $routeParams, Row) {
    $scope.phone = Row.get({phoneId: $routeParams.rowId}, function(row) {
      $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    };
  }]);
