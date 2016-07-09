/**
 * Set up AngularJS app
 */
var myApp = angular.module('auNapApp', ['ngResource', 'ngRoute']);

/**
 * Configure the app routes
 */
myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider

      // 404
      .otherwise("/404", {templateUrl: "../views/404.html", controller: "AuNapCtrl"})
}]);


/**
 * AngularJS controller which controls logic of app
 */
myApp.controller('AuNapCtrl', ['$scope', function($scope) {
  console.log('****IN HERE!!!!!!!');

  $scope.saveEmailAddress = function() {
  	console.log('You entered: ' + $scope.customerEmail);
  };

}]);