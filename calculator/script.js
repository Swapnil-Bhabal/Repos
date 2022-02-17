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
const deleteButton = document.querySelector('.delete');

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
        if (currentResult !== '') {
            operand2 = '';
            operand2 += e.target.textContent;
            displayExpression.innerText = '';
            // displayResult.innerText = '';
            displayExpression.innerText = displayResult.innerText;
            displayExpression.innerText += currentOperator;
            displayExpression.innerText += operand2;
        } else {
            operand2 += e.target.textContent;
            displayResult.innerText = operand2;
            displayExpression.innerText += e.target.textContent ;
        }   
    }
}

function operation() {
    currentResult = operator(currentOperator, operand1, operand2); 
    displayResult.innerText = currentResult;
}


numbers.forEach(number => number.addEventListener('click', (e) => {
    setNumber(e);
    if (currentResult !== '') {
        displayResult.innerText = '';
    }
}));


operators.forEach(operator => operator.addEventListener('click', (e) => {
    setOperator(e);
    if (currentResult !== '') {
        operand1 = currentResult
        // displayExpression.innerText = operand1;
        
        // operand2 = '';
        operation();
        displayExpression.innerText = ''
        displayExpression.innerText += currentResult;
        displayExpression.innerText += currentOperator;
    } else if(currentOperator && operand1 && operand2 !== '') {
        operation();
        // operand2 = '';
    }
}));


equalButton.addEventListener('click', (e) => {
    operation();
    resetValues();
});

clearButton.addEventListener('click', clearAll);

deleteButton.addEventListener('click', clearAll);
