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

const operators = [" ", "+", "-", "*", "/"];

const operatorArray = [addButton, subtractButton, multiplyButton, divideButton];

operatorArray.forEach((operator) => {
    operator.addEventListener("click", () => {
        const firstChar = calcInput.value.charAt(0);
        const lastChar = calcInput.value.slice(-1);

        if (operators.includes(lastChar) || firstChar === "") {
            return;
        }

        calcInput.value += operator.textContent;
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
        case "*":
            return multiply(a, b);
        case "/":
            return b === 0 ? "Error" : divide(a, b);
        default:
            return null;
    }
}

numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        calcInput.value += button.textContent;
        currentNumber += button.textContent;
        return currentNumber;
    });
});

decimalButton.addEventListener("click", () => {
    const splitNumbers = calcInput.value.split(/[+\-x÷]/);

    if (splitNumbers[splitNumbers.length - 1].includes(".")) {
        return;
    }

    calcInput.value += decimalButton.textContent;
});

equalsButton.addEventListener("click", () => {
    operate();
});
