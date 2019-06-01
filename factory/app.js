var app = angular.module('app', []);

// Creating Factory

app.factory('myFactory', function() {
    var displayFact;
    var addMSG = function(msg) {
        displayFact = 'hi there, how are you' + msg;
    }
    return {
        setMSG: function(msg) {
            addMSG(msg);
        },
        getMSG: function () {
            return displayFact;
        }
    }
});

 
app.controller('myCtrl', function ($scope, $location, myFactory) {
    $scope.formModel = function (inputedData) {
        myFactory.setMSG(inputedData);
        $scope.myCollections = myFactory.getMSG();
        $location
    };
});

