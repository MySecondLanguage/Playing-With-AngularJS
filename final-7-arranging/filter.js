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
