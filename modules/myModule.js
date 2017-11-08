var app = angular.module('myModule',[]);
app.controller('HelloController', HelloController);

function HelloController(){
    this.helloMessage = " This comes from myModule module";
}
