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
    .when('/filter/', {
        templateUrl: 'objeorder.html',
        controller: 'filterCtrl'
    })
    .when('/', {
        template: '<strong>Welcome to my app</strong><br> <i>Click on one of the link from left side</i>'
    })
    
    .otherwise({
        template: '<strong>No Content Available here</strong>'
    })
}]);

// It will take data from url and show them on another route
app.controller('sumurl', ['$scope', '$routeParams', function($scope, $routeParams) {
    $scope.id = $routeParams.id;
    $scope.name = $routeParams.name;
}]);

// it will take input data and send this to url and display on another route
app.controller('suminput', ['$scope', '$location', '$interpolate', function($scope, $location, $interpolate) {
    $scope.id = 0;
    $scope.name = 'YOUR NAME';

    $scope.PassDataToDisplyThroughUrl = function() {
        var url = $interpolate('/sumurl/{{ id }}/{{ name }}')($scope);
        //console.log(url);
        $location.path(url);
    }
}]);


// It will filter a javascript array of objects and ordered by name

app.controller('filterCtrl', function($scope) {
    $scope.names = [
        {id:1,name:'b'},
        {id:2,name:'c'},
        {id:3,name:'a'}
        ];
    $scope.orderByMe = function(x) {
        $scope.myOrderBy = x;
    }
});



// It will restrict inputing in the input field my own rules

