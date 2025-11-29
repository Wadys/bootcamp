const calculatorDisplay = document.querySelector('h1');
const inputBtns = document.querySelectorAll('button');
const clearBtn = document.getElementById('clear-btn');

let firstValue = 0;
let awaitingNextValue = false;
let operatorValue = '';

function addNumberValue(number) {
    if (awaitingNextValue) {
        calculatorDisplay.textContent = number;
        awaitingNextValue = false;
    } else {
        const displayValue = calculatorDisplay.textContent;
        calculatorDisplay.textContent = displayValue === '0' ? number : displayValue + number;
    }
};
function useOperator(operator) {
    const currentValue = Number(calculatorDisplay.textContent);
    if (operatorValue && awaitingNextValue) {
        operatorValue = operator;
        return;
    }
    if(!firstValue){
        firstValue = currentValue;
    }
    else{
        const calculation = calculate[operatorValue](firstValue, currentValue);
        calculatorDisplay.textContent = calculation;
        firstValue = calculation;
    }
    operatorValue = operator;
    awaitingNextValue = true;
};
const calculate ={
    '/': (firstNumber, secondNumber) => firstNumber / secondNumber,
    '*': (firstNumber, secondNumber) => firstNumber * secondNumber,
    '+': (firstNumber, secondNumber) => firstNumber + secondNumber,
    '-': (firstNumber, secondNumber) => firstNumber - secondNumber,
    '=': (firstNumber, secondNumber) => secondNumber,
};

inputBtns.forEach((inputBtn) => {
    if (inputBtn.classList.length === 0) {
        inputBtn.addEventListener('click', () => addNumberValue(inputBtn.value)); //sendNumberValue(inputBtn.value
    } else if (inputBtn.classList.contains('operator')) {
        inputBtn.addEventListener('click', () => useOperator(inputBtn.value));    
    }
    else if (inputBtn.classList.contains('decimal')) {
        inputBtn.addEventListener('click', () => addDecimal());
    }
});

function resetAll() {
    firstValue = 0;
    awaitingNextValue = false;
    operatorValue = '';
    calculatorDisplay.textContent = '0';
}
clearBtn.addEventListener('click', resetAll);

function addDecimal() {
    if (awaitingNextValue) return;
    if (!calculatorDisplay.textContent.includes('.')) {
        calculatorDisplay.textContent += '.';
    }
}