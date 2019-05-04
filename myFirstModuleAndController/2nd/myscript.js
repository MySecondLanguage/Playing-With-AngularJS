var myApp = angular.module('myModule', [])
var myController = function($scope) {
	$scope.msg = 'hello, this from controller';
	var student = {name: 'Jhon Doe', age: 26}

	$scope.student = student;
}

myApp.controller('myCtrl', myController);