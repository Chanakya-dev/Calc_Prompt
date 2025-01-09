let display = document.getElementById('display');
let currentExpression = '';

function clearDisplay() {
    display.value = '';
    currentExpression = '';
}

function appendToDisplay(value) {
    display.value += value;
    currentExpression += value;
}

function calculate() {
    try {
        display.value = eval(currentExpression);
        currentExpression = display.value;
    } catch (error) {
        display.value = 'Error';
    }
}
