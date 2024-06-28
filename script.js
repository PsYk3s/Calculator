const sumBtn = document.getElementById("sum").addEventListener("click", () => operatorSelect("+"));
const subtractBtn = document.getElementById("subtract").addEventListener("click", () => operatorSelect("-"));
const multiplyBtn = document.getElementById("multiply").addEventListener("click", () => operatorSelect("*"));
const divideBtn = document.getElementById("divide").addEventListener("click", () => operatorSelect("/"));
const equalsBtn = document.getElementById("result").addEventListener("click", () => equals());
const clearBtn = document.getElementById("clear").addEventListener("click", () => clear());
const displaySolution = document.getElementById("solution");
const displayFormula = document.getElementById("formula");

const oneBtn = document.getElementById("one").addEventListener("click", () => operation("1"));
const twoBtn = document.getElementById("two").addEventListener("click", () => operation("2"));
const threeBtn = document.getElementById("three").addEventListener("click", () => operation("3"));
const fourBtn = document.getElementById("four").addEventListener("click", () => operation("4"));
const fiveBtn = document.getElementById("five").addEventListener("click", () => operation("5"));
const sixBtn = document.getElementById("six").addEventListener("click", () => operation("6"));
const sevenBtn = document.getElementById("seven").addEventListener("click", () => operation("7"));
const eightBtn = document.getElementById("eight").addEventListener("click", () => operation("8"));
const nineBtn = document.getElementById("nine").addEventListener("click", () => operation("9"));
const zeroBtn = document.getElementById("zero").addEventListener("click", () => operation("0"));
const dotBtn = document.getElementById("dot").addEventListener("click", () => operation("."));

let firstNum = "";
let operator = "";
let secondNum = "";
let solution = 0;

let solved = false;

const sum = (a, b) => Number(a) + Number(b);
const subtract = (a, b) => Number(a) - Number(b);
const multiply = (a, b) => Number(a) * Number(b);
const divide = (a, b) => {
    if (a == "0" || b == "0") {
        clear()
        displayFormula.innerText = "Don't do that."
        return
    }
    return Number(a) / Number(b)
}

//Display formula as we go
const update = () => {
    displayFormula.innerText = firstNum + " " + operator + " " + secondNum
}

//If new operator, just select operator else take solution as first number and assign new operation
const operatorSelect = (operant) => {
    if (firstNum && secondNum && operant) {
        equals()
    }
    if (firstNum) {
        if (!solved) {
            operator = operant;
        } else {
            solution == Math.floor(solution) ?
            firstNum = solution :
            firstNum = solution.toFixed(2);
            operator = operant;
            secondNum = "";
            solved = false;
        }
    }
    update()
}

//Check if solved then either start a new operation if true or/and -->
//Concatenate to first number or second number depending on if an operator exists.
const operation = (a) => {
    if (solved) {
        clear()
    }

    if (!operator) {
        if (a == "." && firstNum.includes(".")) {
            return
        }
        firstNum += a;
    } else {
        if (a == "." && secondNum.includes(".")) {
            return
        }
        secondNum += a;
    };
    update()
};

//Equals operation triggers solved variable and sanitises decimals if existing
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
        solution == Math.floor(solution) ?
            displaySolution.innerText = solution :
            displaySolution.innerText = solution.toFixed(2);
        solved = true;
    }
}

//Reset button
const clear = () => {
    firstNum = "";
    operator = "";
    secondNum = "";
    solution = "0";
    solved = false;
    displayFormula.innerText = "-";
    displaySolution.innerText = "0"
}