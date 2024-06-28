const sumBtn = document.getElementById("sum").addEventListener("click", () => { operator = "+"; update() });
const subtractBtn = document.getElementById("subtract").addEventListener("click", () => { operator = "-"; update() });
const multiplyBtn = document.getElementById("multiply").addEventListener("click", () => { operator = "*"; update() });
const divideBtn = document.getElementById("divide").addEventListener("click", () => { operator = "/"; update() });
const equalsBtn = document.getElementById("result").addEventListener("click", () => solution = equals());
const clearBtn = document.getElementById("clear").addEventListener("click", () => solution = clear());
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
const divide = (a, b) => Number(a) / Number(b);

const update = () => {
    displayFormula.innerText = firstNum + " " + operator + " " + secondNum
}

const operation = (a) => {
    if (solved) {
        clear()
    }
    if (!operator) {
        firstNum += a
    } else {
        secondNum += a
    }
    update()
}

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
        solved = true;
    }
}

const clear = () => {
    firstNum = "";
    operator = "";
    secondNum = "";
    solution = "0";
    solved = false;
    displayFormula.innerText = "-";
    displaySolution.innerText = "0"
}