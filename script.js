const buttonsE1 = document.querySelectorAll('button');
const inputFieldE1 = document.getElementById('result');

inputFieldE1.addEventListener('keydown', function(e) {
    const allowedKeys = [
        '0','1','2','3','4','5','6','7','8','9','⌫',
        '+','-','*','/','.','Backspace','Delete','Enter','=','ArrowLeft','ArrowRight'
    ];
    if (
        allowedKeys.includes(e.key)
    ) {
        
        if (e.key === 'Enter' || e.key === '=') {
            calculateResult();
            e.preventDefault();
        }
        
        return;
    } else {
        
        e.preventDefault();
    }
});

for (let i = 0; i < buttonsE1.length; i++) {
    buttonsE1[i].addEventListener("click", () => {
        const buttonValue = buttonsE1[i].textContent;
        if (buttonValue === 'Clear') {
            clearResult();
        } else if (buttonValue === '⌫') {
            backspace();
        } else if (buttonValue === '=') {
            calculateResult();
        } else {
            appendValue(buttonValue);
        }
        inputFieldE1.focus();
    });
}

function clearResult() {
    inputFieldE1.value = "";
}

function backspace() {
    inputFieldE1.value = inputFieldE1.value.slice(0, -1);
}

function calculateResult() {
    try {
        inputFieldE1.value = eval(inputFieldE1.value);
    } catch (error) {
        inputFieldE1.value = 'Error';
    }
}

function appendValue(buttonValue) {
    inputFieldE1.value += buttonValue;
}

