angular.module('ngMoreDirectives',[])
.controller('MoreDirectives', MoreDirectives);

function MoreDirectives(){
    this.myList = [
        {'name': 'abc', 'age':20},
        {'name': 'xyz', 'age':30},
        {'name': 'pqr', 'age':34},
        {'name': 'qwerty', 'age':30},
        {'name': 'lmnop', 'age':20},
    ];
}