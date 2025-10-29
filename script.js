const calcInput = document.querySelector("#calc-input");
const calcDisplay = document.querySelector(".calc-display")
const calcEnter = document.querySelector(".calc-enter");
const addButton = document.querySelector(".add-btn");

const numberButtons = document.querySelectorAll(".num-btn");
const decimalButton = document.querySelector(".decimal-btn");


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


calcEnter.addEventListener("click", () => {
    calcDisplay.textContent += add(0, calcInput.value);
})

addButton.addEventListener("click", () => {
    calcInput.value += " + ";
});

numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        calcInput.value += button.textContent;
    })
});

decimalButton.addEventListener("click", () => calcInput.value += ".");
