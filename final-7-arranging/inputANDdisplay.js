app.controller('display', ['$scope', '$routeParams', function($scope, $routeParams) {
    $scope.id = $routeParams.id;
    $scope.name = $routeParams.name;
}]);

app.controller('inputCtrl', ['$scope', '$location', '$interpolate', function($scope, $location, $interpolate) {
    $scope.id = 0;
    $scope.name = 'YOUR NAME';

    $scope.PassDataToDisplyThroughUrl = function() {
        var url = $interpolate('/sumurl/{{ id }}/{{ name }}')($scope);
        //console.log(url);
        $location.path(url);
    }
}]);