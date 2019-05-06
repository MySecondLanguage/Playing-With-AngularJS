var app = angular.module("app", ["ngRoute"]); // Initializing the Apps


app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/sumurl/:id/:name', {
        templateUrl: 'sumurl.html',
        controller: 'sumurl'
    })
    .when('/suminput/', {
        templateUrl: 'input.html',
        controller: 'suminput'
    })
    .when('/filter/', {
        templateUrl: 'filter.html',
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

/// It will check if user input unsupported character and if you user cant meet the requrement, it will not allow to submit anything even stop the keyboard 
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

