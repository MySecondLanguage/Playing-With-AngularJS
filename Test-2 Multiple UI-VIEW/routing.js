var app = angular.module('app', ["ui.router"]);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
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
                template: '<strong>This is test as multple ui-view, lol</strong>',
                controller: 'msg1',
            }
        }
    });

    $stateProvider.state('employess', {
        url: '/employees',
        views: {
            'emp-header': {
                templateUrl: 'emp-header.html',
            },
            'emp-list':{
                templateUrl: 'emp-list.html',
                controller: 'empController',
            }
        }
    });


    $stateProvider.state('root', {
        url: '/',
        template: '<strong>This is your root, you need to click  on somewhere to get something crazy</strong>'
    });

    $stateProvider.state('otherwise', {
        url: '*path',   // It will prevent getting data even you request in wrong url
        template: '<strong>No url available that you requested, try to  find the right url to have your expected data</strong>'
    });


}]);

app.controller('msg1', function($scope) {
    $scope.a = 10;
    $scope.b = 20;
});

app.controller('msg2', function($scope) {
    $scope.c = 50;
    $scope.d = 100;
});


app.controller('empController', function($scope) {
    $scope.x = 'johon doe';
    $scope.y = 'smith';
});