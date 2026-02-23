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

addButton.addEventListener("click", () => {
    const lastChar = calcInput.value.slice(-1);

    if (operators.includes(lastChar)) {
        return;
    }

    calcInput.value += "+";
});

subtractButton.addEventListener("click", () => {
    const lastChar = calcInput.value.slice(-1);

    if (operators.includes(lastChar)) {
        return;
    }

    calcInput.value += "-";
});

multiplyButton.addEventListener("click", () => {
    const lastChar = calcInput.value.slice(-1);

    if (operators.includes(lastChar)) {
        return;
    }

    calcInput.value += "*";
});

divideButton.addEventListener("click", () => {
    const lastChar = calcInput.value.slice(-1);

    if (operators.includes(lastChar)) {
        return;
    }

    calcInput.value += "/";
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
    });
});

decimalButton.addEventListener(("click"), () => {
  if (calcInput.value.includes(".")) {
    return;
  };

  calcInput.value += decimalButton.textContent;
})

equalsButton.addEventListener("click", () => {
    operate();
});
