var app = angular.module('app', ["ui.router"]);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('firstMessage', {
        url: '/first-msg',
        templateUrl: 'msg1.html',
        controller: 'msg1'
    });

    $stateProvider.state('secondMessage', {
        url: '/second-msg',
        templateUrl: 'msg2.html',
        controller: 'msg2'
    });

    $stateProvider.state('root', {
        url: '/',
        template: '<strong>This is your root, you need to click  on somewhere to get something crazy</strong>'
    });

    //$stateProvider.state('noroute', {
     //   url: '*path',   // It will prevent getting data even you request in wrong url
     //   template: '<strong>No url available that you requested, try to  find the right url to have your expected data</strong>'
   // });

   $urlRouterProvider.otherwise('/');

}]);

app.controller('msg1', function($scope) {
    $scope.a = 10;
    $scope.b = 20;
});

app.controller('msg2', function($scope) {
    $scope.c = 50;
    $scope.d = 100;
});