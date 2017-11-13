var app = angular.module('modulesApp',['myModule', 'ngTagsInput']);

app.controller("TagsDemoCtrl",TagsDemoCtrl);

function TagsDemoCtrl(){
    this.tags = [
        {text: 'Text1'},
        {text: 'Text2'},
        {text: 'Text3'}
    ];
}

