let firstNum = '';
let secondNum = '';
let operator = null;

function add(a, b) {
    return Number(a) + Number(b);
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

function operate(operator, a, b) {
    switch(operator){
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case 'x':
            return multiply(a, b);
        case '/':
            return divide(a, b);
    }
}

function clearScreen() {
    display.textContent = 0;
    firstNum = '';
    secondNum = '';
}

let display = document.querySelector('.calculator-display')

document.querySelectorAll('.digit').forEach(button => {
    button.addEventListener('click', function() {
        if (operator === null) {
            firstNum += button.textContent;
            display.textContent = firstNum;
        } else {
            secondNum += button.textContent;
            display.textContent = secondNum;
        }
    });
});

document.querySelectorAll('.operator').forEach(button => {
    button.addEventListener('click', function() {
        if (firstNum !== '') {
            operator = button.textContent;
        }
    });
});

document.querySelector('.equals').addEventListener('click', function() {
    if (firstNum !== '' && secondNum !== '' && operator) {
        let result = operate(operator, firstNum, secondNum);
        console.log(result)
        console.log({operator},{firstNum},{secondNum})
        display.textContent = result;
        firstNum = result;
        secondNum = '';
        operator = null;
    }
})

document.querySelector('.clear').addEventListener('click', clearScreen);