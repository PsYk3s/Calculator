const sumBtn = document.getElementById("sum");
const subtractBtn = document.getElementById("subtract");
const multiplyBtn = document.getElementById("multiply");
const divideBtn = document.getElementById("divide");
const equalsBtn = document.getElementById("result");
const clearBtn = document.getElementById("clear");
const displaySolution = document.getElementById("solution");
const displayFormula = document.getElementById("formula");

let firstNum;
let operator;
let secondNum;
let solution;

const sum = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const equals = () => {
    if (operator && firstNum && secondNum) {
        switch (operator) {
            case "+":
                solution = sum(firstNum, secondNum)
                break;
            case "-":
                solution = subtract(firstNum, secondNum)
                break;
            case "*":
                solution = multiply(firstNum, secondNum)
                break;
            case "/":
                solution = divide(firstNum, secondNum)
                break;
            default:
                break;
        }
        displaySolution.innerText = solution
    }
}