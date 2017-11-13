var app = angular.module("TodoApp", []);
app.controller("Todos",Todos);

function Todos(){
    this.todos=[
        "Learn Angular",
        "Learn Spring",
        "Try out Exercises",
            
    ];

    this.addNewTodo = function(){
        this.todos.push(this.newTodo);
        this.newTodo = "";
    }

    this.triggerEditMode = function(){
        this.editMode = !this.editMode;
    }

    this.deleteTodo = function(index){
        this.todos.splice(index, 1);
    }
}

