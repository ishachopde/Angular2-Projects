var clockapp = angular.module('myClockApp', []);
clockapp.controller('currentTime', currentTime);

function currentTime($scope){
    $scope.userName = "";
    var currentDate = new Date();
    $scope.timeString = currentDate.toTimeString();
    $scope.updateTime = function(){
        var currentDate = new Date();
        $scope.timeString = currentDate.toTimeString();
    }
}

