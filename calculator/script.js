const DEFAULT_DISPLAY_VALUE = 0;
const DEFAULT_EXPRESSION_VALUE = 0;
const expressionObject = {
    operator: ['+', '-', '/', '*', "="],
    num1: [0,1,2,3,4,5,6,7,8,9],
    num2: [0,1,2,3,4,5,6,7,8,9],
}

let currentExpression = [];

let currentDisplayValue = DEFAULT_DISPLAY_VALUE;
let currentExpressionValue = DEFAULT_EXPRESSION_VALUE;

const pressedButtonValue = document.querySelectorAll('button');
const displayResult = document.querySelector('.display-result');
const displayExpression = document.querySelector('.display-expression');
const activeButtons = document.getElementsByClassName('active');
const clearButton = document.querySelector('.clear');
const equalButton = document.querySelector('.equal');

function setDefaultResult(event) {
    if (event.innerText === '' || 0) {
        event.innerText = currentDisplayValue;
    } else {
        event.addEventListener('click', function() {
            if (this.innerText === ('clear' || 'delete')) {
                clearButton.addEventListener('click', () => {
                    displayResult.innerHTML = 0;
                    displayExpression.innerHTML= '&nbsp;';
                });
            } else if(this.innerText === '='){
                equalButton.addEventListener('click', () => {
                    console.log(currentExpression);
                    displayResult.innerText = operator(currentExpression[1], +currentExpression[0], +currentExpression[2]);
                });
            } else {
                displayResult.innerText = this.innerText;
                currentDisplayValue = displayResult.innerText;
                displayExpression.innerText = displayExpression.innerText + displayResult.innerText;
            }    
         });
    }  
}

function setDefaultExpression(event) {
    if (event.innerText === '' || 0) {
        event.innerText = currentExpressionValue;
    }
}

function joinTheExpression() {
}

setDefaultResult(displayResult);
setDefaultExpression(displayExpression);


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

function activateButton() {
    this.classList.add('active');
}

function deactivateButton() {
    this.classList.remove('active');
}



pressedButtonValue.forEach(button => {
    button.addEventListener('click',setDefaultResult(button));
})

pressedButtonValue.forEach(button => {
    button.addEventListener('click',activateButton);
})


pressedButtonValue.forEach(button => {
    button.addEventListener('click', () => {
        for (props of activeButtons) {
            currentExpression.push(props.innerText);
        }
    })
})

pressedButtonValue.forEach(button => {
    button.addEventListener('click',deactivateButton);
})