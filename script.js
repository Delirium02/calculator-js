// Selecting DOM elements
const calcInput = document.querySelector("#calc-input");
const calcEnter = document.querySelector(".calc-enter");

const addButton = document.querySelector(".add-btn");
const subtractButton = document.querySelector(".subtract-btn");
const multiplyButton = document.querySelector(".multiply-btn");
const divideButton = document.querySelector(".divide-btn");
const equalsButton = document.querySelector(".equals-btn, .calc-enter");
const clearButton = document.querySelector(".clear-btn");

const numberButtons = document.querySelectorAll(".num-btn:not(.decimal-btn)");
const decimalButton = document.querySelector(".decimal-btn");

const currentEquation = calcInput.value;

firstNum = "";
secondNum = "";
currentOperator = "";
currentNumber = "";

// Basic arithmetic functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

const operators = [" ", "+", "-", "x", "÷"];

const operatorArray = [addButton, subtractButton, multiplyButton, divideButton];

operatorArray.forEach((op) => {
    op.addEventListener("click", () => {
        const firstChar = calcInput.value.charAt(0);
        const lastChar = calcInput.value.slice(-1);

        if (firstChar === "" || operators.includes(lastChar)) {
            return;
        }

        calcInput.value += op.textContent;
        currentOperator = op.textContent;
    });
});

function operate(a, b, operator) {
    a = Number(a);
    b = Number(b);

    switch (operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "x":
            return multiply(a, b);
        case "÷":
            return b === 0 ? "Error" : divide(a, b);
        default:
            return null;
    }
}

numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (currentOperator === "") {
            firstNum += value;
        } else {
            secondNum += value;
        }

        calcInput.value += value;
    });
});

decimalButton.addEventListener("click", () => {
    const splitNumbers = calcInput.value.split(/[+\-x÷]/);

    if (splitNumbers[splitNumbers.length - 1].includes(".")) {
        return;
    }

    const value = decimalButton.textContent;

        if (currentOperator === "") {
            firstNum += value;
        } else {
            secondNum += value;
        }

        calcInput.value += value;
});

equalsButton.addEventListener("click", () => {
    const result = operate(firstNum, secondNum, currentOperator);
    calcInput.value = result;
    firstNum = result;
    secondNum = "";
    currentOperator = "";
});

function clearInputField() {
    calcInput.value = "";
    firstNum = "";
    secondNum = "";
    currentOperator = "";
}

clearButton.addEventListener("click", () => {
    clearInputField();
});
