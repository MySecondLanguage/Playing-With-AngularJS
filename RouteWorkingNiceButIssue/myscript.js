var app = angular.module("app", ["ngRoute"]);


app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/sumurl/:a/:b', {
        templateUrl: 'sumurl.html',
        controller: 'sumurl'
    })
    .when('/', {
        template: '<strong>Welcome to my app</strong><br> <i>Click on one of the link from left side</i>'
    })
    .otherwise({
        template: '<strong>No Content Available here</strong>'
    })
}]);


app.controller('sumurl', ['$scope', '$routeParams', function($scope, $routeParams) {
    $scope.a = $routeParams.a;
    $scope.b = $routeParams.b;
}]);