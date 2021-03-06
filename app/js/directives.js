'use strict';

/* Directives */
angular.module('crossoverDirectives',[]).directive('toggleClass', function() {
  return {
      restrict: 'A',
      link: function(scope, element, attrs) {
          element.bind('click', function() {
              console.debug("Clicked "+element.text()+ " count:"+ element.parent(".row").length);
              $(".row").removeClass("details");
              element.parent(".row").addClass("details",{duration:500});
              //$(".row").switchClass( "details","short",  1000, "easeInOutQuad" );
              //element.parent(".row").switchClass( "short", "details", 1000, "easeInOutQuad" );
          });
      }
  };
});
