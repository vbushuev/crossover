'use strict';

/* Controllers */

var crossoverControllers = angular.module('crossoverControllers', []);

crossoverControllers.controller('RowListCtrl', ['$scope', 'Row',
  function($scope, Row) {
    $scope.rows = Row.query();
    $scope.showDetails = function(own){
      console.debug(own+" Clicked "+jQuery(this)+ " count:"+jQuery(".row").lenth);
      jQuery(".row").removeClass("details");
      jQuery(this).parent(".row").addClass("details");
    }
  }]);

crossoverControllers.controller('RowDetailCtrl', ['$scope', '$routeParams', 'Row',
  function($scope, $routeParams, Row) {
    $scope.row = Row.get({rowId: $routeParams.rowId}, function(row) {
      $scope.mainImageUrl = row.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    };
  }]);
