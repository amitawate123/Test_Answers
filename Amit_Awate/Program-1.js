// Program-1.js
// Calculator class to perform basic arithmetic operations


class Calculator {
    constructor(a, b, operation) {
        this.a = a;
        this.b = b;
        this.operation = operation;
    }

    // Method to calculate the result based on the operation
    calculate() {   
        switch(this.operation) {
            case "Add":
                return this.a + this.b;
            case "Subtract":
                return this.a - this.b;
            case "Multiply":
                return this.a * this.b;
            case "Divide":
                if(this.a !== 0){
                    return this.a / this.b;
                } else {
                    return "Error: Division by zero";
                }      
            default:
                return "Error: Invalid operation";       
        }
    }
}



const calc = new Calculator(10, 20, "Divide");
console.log(calc.calculate())