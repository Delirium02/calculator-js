// Selecting DOM elements
const calcInput = document.querySelector("#calc-input");
const calcEnter = document.querySelector(".calc-enter");

const addButton = document.querySelector(".add-btn");
const subtractButton = document.querySelector(".subtract-btn");
const multiplyButton = document.querySelector(".multiply-btn");
const divideButton = document.querySelector(".divide-btn");
const equalsButton = document.querySelector(".equals-btn, .calc-enter");
const clearButton = document.querySelector(".clear-btn");

const numberButtons = document.querySelectorAll(".num-btn");
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

// Addition button functionality
addButton.addEventListener("click", () => {
    const lastChar = calcInput.value.slice(-1);
    if (lastChar === " " || lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/") {
        return;
    } else {
        calcInput.value += " + ";
    }
});


// Subtraction button functionality
subtractButton.addEventListener("click", () => {
    const lastChar = calcInput.value.slice(-1);
    if (lastChar === " " || lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/") {
        return;
    } else {
        calcInput.value += " - ";
    }
});


// Multiplication button functionality
multiplyButton.addEventListener("click", () => {
    const lastChar = calcInput.value.slice(-1);
    if (lastChar === " " || lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/") {
        return;
    } else {
        calcInput.value += " * ";
    }
});

// Division button functionality
divideButton.addEventListener("click", () => {
    const lastChar = calcInput.value.slice(-1);
    if (lastChar === " " || lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/") {
        return;
    } else {
        calcInput.value += " / ";
    }
});

// Number buttons functionality
numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        calcInput.value += button.textContent;
    })
});

// Clear button functionality
clearButton.addEventListener("click", () => {
    calcInput.value = "";
});

// Decimal button functionality
decimalButton.addEventListener("click", () => {
  const current = calcInput.value;
  const lastNumber = current.split(/[\+\-\*\/]\s*/).pop().trim(); 
  const lastChar = current.slice(-1);

  // Block if last character is an operator or space
  if (["+", "-", "*", "/", " "].includes(lastChar)) return;

  // Block if current number already has a decimal
  if (lastNumber.includes(".")) return;

  calcInput.value += ".";
});

// Updated equals button functionality to use switch statement
equalsButton.addEventListener("click", () => {
    const input = calcInput.value.trim();

    switch (true) {
        case input.includes(" + "):
            const addValues = input.split(" + ");
            calcInput.value = add(Number(addValues[0]), Number(addValues[1]));
            break;
        case input.includes(" - "):
            const subtractValues = input.split(" - ");
            calcInput.value = subtract(Number(subtractValues[0]), Number(subtractValues[1]));
            break;
        case input.includes(" * "):
            const multiplyValues = input.split(" * ");
            calcInput.value = multiply(Number(multiplyValues[0]), Number(multiplyValues[1]));
            break;
        case input.includes(" / "):
            const divideValues = input.split(" / ");
            calcInput.value = divide(Number(divideValues[0]), Number(divideValues[1]));
            break;
        default:
            break;
    }
});

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        equalsButton.click();
    }
});