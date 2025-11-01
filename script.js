// Selecting DOM elements
const calcInput = document.querySelector("#calc-input");
const calcEnter = document.querySelector(".calc-enter");

const addButton = document.querySelector(".add-btn");
const subtractButton = document.querySelector(".subtract-btn");
const multiplyButton = document.querySelector(".multiply-btn");
const divideButton = document.querySelector(".divide-btn");
const equalsButton = document.querySelector(".equals-btn");
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
decimalButton.addEventListener("click", () => calcInput.value += ".");

// Updated equals button functionality to use switch statement
equalsButton.addEventListener("click", () => {
    input = calcEnter.value.trim();

    switch (true) {
        case calcInput.value.includes("+"):
            const addValues = calcInput.value.split(" + ");
            calcInput.value = add(Number(addValues[0]), Number(addValues[1]));
            break;
        case calcInput.value.includes("-"):
            const subtractValues = calcInput.value.split(" - ");
            calcInput.value = subtract(Number(subtractValues[0]), Number(subtractValues[1]));
            break;
        case calcInput.value.includes("*"):
            const multiplyValues = calcInput.value.split(" * ");
            calcInput.value = multiply(Number(multiplyValues[0]), Number(multiplyValues[1]));
            break;
        case calcInput.value.includes("/"):
            const divideValues = calcInput.value.split(" / ");
            calcInput.value = divide(Number(divideValues[0]), Number(divideValues[1]));
            break;
    } }
);

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        equalsButton.click();
    }
});