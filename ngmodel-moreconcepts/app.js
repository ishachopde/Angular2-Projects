var app = angular.module("ngModelConcepts", []);
app.controller("moreConcepts", moreConcepts);

function moreConcepts($scope){
   $scope.textBoxChange = function(){
       console.log("Textbox changed");
   }
}