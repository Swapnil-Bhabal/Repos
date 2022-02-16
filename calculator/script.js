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
    num1 = +num1
    num2 = +num2
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

let operand1 = '';
let operand2 = '';
let currentOperator = '';
let currentExpression = [];
let currentResult = '';

const allButtons = document.querySelectorAll('button');
const displayResult = document.querySelector('.display-result');
const displayExpression = document.querySelector('.display-expression');
const activeButtons = document.getElementsByClassName('active');
const clearButton = document.querySelector('.clear');
const equalButton = document.querySelector('.equal');
const operators = document.querySelectorAll('.operator');
const numbers = document.querySelectorAll('.number');


function clearAll() {
    displayResult.innerText = '';
    displayExpression.innerText = '';
    operand1 = '';
    currentOperator = '';
    operand2 = '';
    currentResult = '';
}

function resetValues() {
    operand1 = '';
    currentOperator = '';
    operand2 = '';
}

function setOperator(e) {
    currentOperator = e.target.textContent;
    displayResult.innerText = currentOperator;
    displayExpression.innerText += currentOperator;
}

function setNumber(e) {
    if (currentOperator === '') {
        operand1 += e.target.textContent;
        displayResult.innerText = operand1;
        displayExpression.innerText = operand1;
        
    } else {
        operand2 += e.target.textContent;
        displayResult.innerText = operand2;
        displayExpression.innerText += operand2;
    }
}

function operation() {
    currentResult = operator(currentOperator, operand1, operand2); 
    displayResult.innerText = currentResult;
     
}


numbers.forEach(number => number.addEventListener('click', (e) => {
    setNumber(e);
}));


operators.forEach(operator => operator.addEventListener('click', (e) => {
    setOperator(e);
    if (currentResult !== '') {
        operand1 = currentResult
        displayExpression.innerText = operand1;
        displayExpression.innerText += currentOperator;
        operand2 = '';
        operation();
    } else {
        operand2 = '';
        operation();
    }
}));


equalButton.addEventListener('click', (e) => {
    operation();
    resetValues();
});

clearButton.addEventListener('click', clearAll);
