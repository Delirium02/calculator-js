const calcInput = document.querySelector("#calc-input");
const calcDisplay = document.querySelector(".calc-display")
const calcEnter = document.querySelector(".calc-enter");
const addButton = document.querySelector(".add-button");


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


calcInput.addEventListener("click", () => {

})

addButton.addEventListener("click", () => {
    calcDisplay.textContent += " + ";
});