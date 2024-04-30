function appendToDisplay(value) {
    document.getElementById('display').textContent += value;
}

function clearDisplay() {
    document.getElementById('display').textContent = '';
}

function calculate() {
    const expression = document.getElementById('display').textContent;
    const result = eval(expression);
    document.getElementById('display').textContent = result;
}
