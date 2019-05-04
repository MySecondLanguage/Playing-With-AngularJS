var myApp = angular.module('myModule', [])
var myController = function($scope) {
	$scope.msg = 'hello, this from controller';
}

myApp.controller('myCtrl', myController);