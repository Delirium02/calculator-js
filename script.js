// Selecting DOM elements
const calcInput = document.querySelector("#calc-input");
const calcEnter = document.querySelector(".calc-enter");

const addButton = document.querySelector(".add-btn");
const subtractButton = document.querySelector(".subtract-btn");
const multiplyButton = document.querySelector(".multiply-btn");
const divideButton = document.querySelector(".divide-btn");
const equalsButtons = document.querySelectorAll(".equals-btn");
const clearButton = document.querySelector(".clear-btn");

const numberButtons = document.querySelectorAll(".num-btn:not(.decimal-btn)");
const decimalButton = document.querySelector(".decimal-btn");
// const errorMsg = document.querySelector(".error-msg");

const currentEquation = calcInput.value;

let firstNum = "";
let secondNum = "";
let currentOperator = "";
let currentNumber = "";
let resetScreen = false;

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
        const lastChar = calcInput.value.slice(-1);

        if (calcInput.value === "" || operators.includes(lastChar)) {
            return;
        }

        if (firstNum !== "" && currentOperator !== "" && secondNum !== "") {
            calculateEquation();
        }

        currentOperator = op.textContent;
        calcInput.value += currentOperator;
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

        if (resetScreen) {
            clearInputField();
            resetScreen = false;
        }

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

function calculateEquation() {
    if (firstNum === "" || currentOperator === "" || secondNum === "") return;

    let result = operate(firstNum, secondNum, currentOperator);
    if (typeof result === "number" && result % 1 !== 0) {
        calcInput.value = result.toFixed(5);
    } else {
        calcInput.value = result;
    }
    firstNum = result.toString();
    secondNum = "";
    currentOperator = "";
    resetScreen = true;
}

equalsButtons.forEach((equalsBtn) => {
    equalsBtn.addEventListener("click", calculateEquation);
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        calculateEquation();
    }

    if (event.key === "Backspace") {
        event.preventDefault();
        calcInput.value = calcInput.value.slice(0, -1);

        if (secondNum !== "") {
            secondNum = secondNum.slice(0, -1);
        } else if (currentOperator !== "") {
            currentOperator = "";
        } else {
            firstNum = firstNum.slice(0, -1);
        }
    }
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
