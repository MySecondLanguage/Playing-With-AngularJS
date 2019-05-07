var app = angular.module("app", ["ngRoute", "ui.router"]);


app.config(['$routeProvider', '$stateProvider', '$urlRouterProvider',  function($routeProvider, $stateProvider, $urlRouterProvider) {
    $routeProvider
    .when('/sumurl/:id/:name', { 
        templateUrl: 'sumurl.html',
        controller: 'sumurl'
    })

    //.when('/suminput/', {
        //templateUrl: 'input.html',
        //controller: 'suminput'
    //})

    //$stateProvider.state('sample01', {
        //url: '/sample01',
        //templateUrl: 'msg1.html',
        //controller: 'msg1'
    //});

    $stateProvider.state('sample02', {
        url: '/input',
        views:{
            '':{
                templateUrl: 'default.html',
                controller: 'default',
            },

            'inputView':{
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


app.controller('default', function($scope) {
    $scope.a = 10;
    $scope.b = 20;
});




app.directive('restrictInput', function() {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function(scope, element, attr, ctrl) {
      ctrl.$parsers.unshift(function(viewValue) {
        var options = scope.$eval(attr.restrictInput);
        if (!options.regex && options.type) {
          switch (options.type) {
            case 'digitsOnly': options.regex = '^[0-9]*$'; break;
            case 'lettersOnly': options.regex = '^[a-zA-Z]*$'; break;
            default: options.regex = '';
          }
        }
        var reg = new RegExp(options.regex);
        if (reg.test(viewValue)) { //if valid view value, return it
          return viewValue;
        } else { //if not valid view value, use the model value (or empty string if that's also invalid)
          var overrideValue = (reg.test(ctrl.$modelValue) ? ctrl.$modelValue : '');
          element.val(overrideValue);
          return overrideValue;
        }
      });
    }
  };
});
