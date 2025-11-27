function clearScreen() {
    document.getElementById('result').value = '';
}

function deleteLast() {
    let result = document.getElementById('result').value;
    document.getElementById('result').value = result.slice(0, -1);
}

function insert(char) {
    document.getElementById('result').value += char;
}

function calculate() {
    let result = document.getElementById('result').value;
    try {
        let answer = eval(result);
        addToHistory(result + ' = ' + answer);
        document.getElementById('result').value = answer;
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}

window.addEventListener('keydown', function(event) {
    const key = event.key;
    if (key >= '0' && key <= '9') {
        insert(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        insert(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Backspace') {
        deleteLast();
    }
});