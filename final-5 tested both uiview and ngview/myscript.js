var app = angular.module("app", ["ngRoute", "ui.router"]);


app.config(['$routeProvider', '$stateProvider', '$urlRouterProvider',  function($routeProvider, $stateProvider, $urlRouterProvider) {
    $routeProvider
    .when('/sumurl/:id/:name', {
        templateUrl: 'sumurl.html',
        controller: 'sumurl'
    })

    .when('/suminput/', {
        templateUrl: 'input.html',
        controller: 'suminput'
    })

    $stateProvider.state('sample01', {
        url: '/sample01',
        templateUrl: 'msg1.html',
        controller: 'msg1'
    });

    $stateProvider.state('sample02', {
        url: '/sample02',
        views:{
            '':{
                templateUrl: 'msg1.html',
                controller: 'msg1',
            },

            'test':{
                templateUrl: 'input.html',
                controller: 'suminput',
            }
        }
    });


}]);



app.controller('sumurl', ['$scope', '$routeParams', function($scope, $routeParams) {
    $scope.id = $routeParams.id;
    $scope.name = $routeParams.name;
}]);

app.controller('suminput', ['$scope', '$location', '$interpolate', function($scope, $location, $interpolate) {
    $scope.id = 0;
    $scope.name = 'YOUR NAME';

    $scope.PassDataToDisplyThroughUrl = function() {
        var url = $interpolate('/sumurl/{{ id }}/{{ name }}')($scope);
        //console.log(url);
        $location.path(url);
    }
}]);


app.controller('msg1', function($scope) {
    $scope.a = 10;
    $scope.b = 20;
});

