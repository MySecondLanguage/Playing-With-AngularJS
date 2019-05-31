var app = angular.module('app', []);

app.factory('mySharedService', function($rootScope) {
    var sharedService = {};
    sharedService.message = {};
    sharedService.preForBroadcast = function(msg) {
        this.message = msg;
        this.broadcastItem();
    };

    sharedService.broadcastItem = function() {
        $rootScope.$broadcast('handleBroadcast');
    }


    
    return sharedService;
});

app.controller('controllerOne', function($scope, mySharedService) {
    $scope.handleClick = function(msg) {
        mySharedService.preForBroadcast(msg);
    };
    $scope.$on('handleBroadcast', function() {
        $scope.message = 'ONE :' + mySharedService.message;
    });
});

app.controller('controllerTwo', function($scope, mySharedService) {
    $scope.$on('handleBroadcast', function() {
        $scope.message = 'TWO :' + mySharedService.message;
    });

});


app.controller('controllerThree', function($scope, mySharedService) {
    $scope.$on('handleBroadcast', function() {
        $scope.message = 'THREE :' + mySharedService.message;
    });

});



