var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope) {
  $scope.val7 = "abc";
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