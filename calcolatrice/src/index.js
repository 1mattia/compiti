// Dichiarazioni delle funzioni di base per la calcolatrice

let currentInput = '';  // Variabile per memorizzare l'input corrente
let currentOperator = '';  // Variabile per memorizzare l'operatore corrente
let result = '';  // Variabile per memorizzare il risultato

// Funzione per aggiungere un numero o un punto decimale all'input corrente
function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

// Funzione per aggiungere un operatore all'input corrente
function appendOperator(operator) {
    currentOperator = operator;
    result += currentInput + ' ' + currentOperator + ' ';
    currentInput = '';
    updateDisplay();
}

// Funzione per aggiungere il segno di più/minus all'input corrente
function toggleSign() {
    currentInput = currentInput.startsWith('-') ? currentInput.slice(1) : '-' + currentInput;
    updateDisplay();
}

// Funzione per aggiungere un punto decimale all'input corrente
function appendDecimalPoint() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        updateDisplay();
    }
}

// Funzione per cancellare l'ultimo carattere dall'input corrente
function deleteLastChar() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

// Funzione per cancellare l'input corrente
function clearEntry() {
    currentInput = '0';
    updateDisplay();
}

// Funzione per cancellare tutti i dati inseriti
function clearAll() {
    currentInput = '0';
    currentOperator = '0';
    result = '';
    updateDisplay();
}

// Funzione per calcolare il risultato dell'espressione corrente
function calculateResult() {
    result += currentInput;
    try {
        result = eval(result);
        updateDisplay();
        currentInput = result;
        currentOperator = '';
    } catch (error) {
        updateDisplay("Errore");
    }
}

// Funzione per aggiornare il display con l'input corrente
function updateDisplay(value) {
    document.getElementById('numberSum').innerText = value || currentInput;
    document.getElementById('summator').innerText = result + (currentOperator ? ' ' : '');
}