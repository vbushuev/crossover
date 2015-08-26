'use strict';

/* Services */

var crossoverServices = angular.module('crossoverServices', ['ngResource']);

crossoverServices.factory('Row', ['$resource',
  function($resource){
    return $resource('rows/:rowId.json', {}, {
      query: {method:'GET', params:{rowId:'rows'}, isArray:true}
    });
  }]);
