app.controller('suminput', ['$scope', '$location', '$interpolate', function($scope, $location, $interpolate) {
    $scope.id = 0;
    $scope.name = 'YOUR NAME';

    $scope.PassDataToDisplyThroughUrl = function() {
        var url = $interpolate('/sumurl/{{ id }}/{{ name }}')($scope);
        //console.log(url);
        $location.path(url);
    }
}]);