let history = [];

function addToHistory(calculation) {
    history.push(calculation);
    updateHistory();
}

function updateHistory() {
    let historyList = document.getElementById('history-list');
    historyList.innerHTML = '';
    for (let i = 0; i < history.length; i++) {
        let listItem = document.createElement('li');
        listItem.appendChild(document.createTextNode(history[i]));
        historyList.appendChild(listItem);
    }
}

function clearHistory() {
    history = [];
    updateHistory();
}
