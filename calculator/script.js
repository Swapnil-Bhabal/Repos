const DEFAULT_DISPLAY_VALUE = 0;


let currentDisplayValue = DEFAULT_DISPLAY_VALUE;

const pressedButtonValue = document.querySelectorAll('button');
const displayResult = document.querySelector('.display-result');
const displayExpression = document.querySelector('display-expression');

function setDefaultResult(event) {
    if (event.innerText === '' || 0) {
        event.innerText = currentDisplayValue;
    } else {
        event.addEventListener('click', function() {
            displayResult.innerText = this.innerText
         });
    }
}

setDefaultResult(displayResult);

function setDisplayResult() {
    displayResult.innerText = event.innerText;
}

function add (a, b) {
    return a + b;
}

function substract (a, b) {
    return a - b;
}

function multiply (a, b) {
    return a * b;
}

function divide (a, b) {
    return a / b;
}

function operator(operator, num1, num2) {
    if (operator === '+') {
        return add(num1, num2);
    } else if (operator === '-') {
        return substract(num1, num2);
    } else if (operator === '*') {
        return multiply(num1, num2);
    } else {
        return divide(num1, num2);
    }
}

pressedButtonValue.forEach(button => {
    button.addEventListener('click',setDefaultResult(button));
})




