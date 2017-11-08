var app = angular.module("calculatorApp", []);
app.controller("calculatorApp", calculatorApp);

function calculatorApp(){
    this.buttonClicked = function(button){
        this.selectedOperation = button; 
        this.resultValue = 0;
    }

    this.computeResult = function(){
        var number1 = parseFloat(this.textbox1);
        var number2 = parseFloat(this.textbox2);
        if(this.selectedOperation === '+'){
            this.resultValue = number1 + number2;
        }
        else if(this.selectedOperation === '-'){
            this.resultValue = number1 - number2;
        }
        else if(this.selectedOperation === '*'){
            this.resultValue = number1 * number2;
        }
        else if(this.selectedOperation === '/'){
            this.resultValue = number1 / number2;
        }
        
    }

   
}