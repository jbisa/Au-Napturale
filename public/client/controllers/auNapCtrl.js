/**
 * Set up AngularJS app
 */
var myApp = angular.module('auNapApp', []);

/**
 * AngularJS controller which controls logic of app
 */
myApp.controller('AuNapCtrl', ['$scope', '$http', function($scope, $http) {

  	$scope.saveEmailAddress = function() {
  		console.log('***You entered: ' + $scope.customerEmail);
  		$http.post('/user', $scope.customerEmail);
  	};

}]);