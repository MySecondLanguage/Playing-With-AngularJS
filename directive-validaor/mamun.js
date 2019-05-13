angular.module('sampleapp').directive('disableBtn',
function() {
 return {
  restrict : 'A',
  link : function(scope, element, attrs) {
   var $el = $(element);
   var submitBtn = $el.find('button[type="submit"]');
   var _name = attrs.name;
   scope.$watch(_name + '.$valid', function(val) {
    if (val) {
     submitBtn.removeAttr('disabled');
    } else {
     submitBtn.attr('disabled', 'disabled');
    }
   });
  }
 };
}
);