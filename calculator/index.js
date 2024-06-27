document.addEventListener('DOMContentLoaded', () => {
    const currentDisplay = document.getElementById('currentDisplay');
    const previousDisplay = document.getElementById('previousDisplay');
    const buttons = document.querySelectorAll('.btn');
    let currentInput = '0';
    let previousInput = '';
    let operator = '';
    let equalsPressed = false;

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent;

            if (button.classList.contains('btn-clear')) {
                currentInput = '0';
                previousInput = '';
                operator = '';
                equalsPressed = false;
            } else if (button.classList.contains('btn-operator')) {
                if (value === '±') {
                    currentInput = (parseFloat(currentInput) * -1).toString();
                } else if (value === '%') {
                    currentInput = (parseFloat(currentInput) / 100).toString();
                } else {
                    if (previousInput && operator && !equalsPressed) {
                        currentInput = calculate(previousInput, currentInput, operator);
                    }
                    previousInput = currentInput;
                    currentInput = '0';
                    operator = value;
                    equalsPressed = false;
                }
            } else if (button.classList.contains('btn-equals')) {
                if (previousInput && operator) {
                    currentInput = calculate(previousInput, currentInput, operator);
                    previousInput = '';
                    operator = '';
                    equalsPressed = true;
                }
            } else {
                if (currentInput === '0' || equalsPressed) {
                    currentInput = value;
                    equalsPressed = false;
                } else {
                    currentInput += value;
                }
            }

            currentDisplay.textContent = currentInput;
            previousDisplay.textContent = previousInput + ' ' + operator;
        });
    });

    function calculate(num1, num2, operator) {
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
        switch (operator) {
            case '+':
                return (num1 + num2).toString();
            case '-':
                return (num1 - num2).toString();
            case '*':
                return (num1 * num2).toString();
            case '/':
                return (num1 / num2).toString();
            default:
                return num2.toString();
        }
    }
});
