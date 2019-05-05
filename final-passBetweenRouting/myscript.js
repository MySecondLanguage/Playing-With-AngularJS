var app = angular.module("app", ["ngRoute"]);


app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/sumurl/:id/:name', {
        templateUrl: 'sumurl.html',
        controller: 'sumurl'
    })
    .when('/suminput/', {
        templateUrl: 'suminput.html',
        controller: 'suminput'
    })
    .when('/', {
        template: '<strong>Welcome to my app</strong><br> <i>Click on one of the link from left side</i>'
    })
    .otherwise({
        template: '<strong>No Content Available here</strong>'
    })
}]);


app.controller('sumurl', ['$scope', '$routeParams', function($scope, $routeParams) {
    $scope.id = $routeParams.id;
    $scope.name = $routeParams.name;
}]);

app.controller('suminput', ['$scope', '$location', '$interpolate', function($scope, $location, $interpolate) {
    $scope.id = 0;
    $scope.name = 0;

    $scope.PassDataToDisplyThroughUrl = function() {
        var url = $interpolate('/sumurl/{{ id }}/{{ name }}')($scope);
        //console.log(url);
        $location.path(url);
    }
}]);