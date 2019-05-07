var app = angular.module("app", ["ngRoute", "ui.router"]);


app.config(['$routeProvider', '$stateProvider', '$urlRouterProvider',  function($routeProvider, $stateProvider, $urlRouterProvider) {
    $routeProvider
    .when('/sumurl/:id/:name', { 
        templateUrl: 'display.html',
        controller: 'display'
    })

    //.when('/suminput/', {
        //templateUrl: 'input.html',
        //controller: 'suminput'
    //})

    $stateProvider.state('filter', {
        url: '/filter',
        templateUrl: 'filter.html',
        controller: 'filterCtrl'
    });

    $stateProvider.state('sample02', {
        url: '/input',
        views:{
            '':{
                templateUrl: 'default.html',
                controller: 'default',
            },

            'inputView':{
                templateUrl: 'input.html',
                controller: 'inputCtrl',
            }
        }
    });


}]);






app.controller('default', function($scope) {
    $scope.a = 10;
    $scope.b = 20;
});






