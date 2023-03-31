document.querySelector('.buttons').onclick = function (event) {
    let target = event.target;
    let input = document.querySelector('#expression');
    let value = '';
    let operators = ['+', '-', '*', '/', '.'];

    if (target.classList.contains('number')) {
        value = target.innerHTML;
        if (input.value == 0) {
            input.value = value;
        } else {
            input.value += value;
        }
    } else if (target.classList.contains('operation')) {
        value = target.innerHTML;
        let expression = input.value;
        let lastChar = expression[expression.length - 1];
        if (operators.indexOf(lastChar) == -1) {
            input.value += value;
        } else {
            if (lastChar != '.') {
                expression = expression.replace(/.$/, value);
                input.value = expression;
            }

        }
    } else if (target.classList.contains('calculation')) {
        let expression = input.value;
        let result = eval(expression);
        input.value = result;
    } else if (target.classList.contains('clear_one')) {
        let expression = input.value;
        expression = expression.substring(0, expression.length - 1);
        input.value = expression;
        if (expression == '') {
            input.value = 0;
        }
    } else if (target.classList.contains('clear')) {
        input.value = 0;
    }

}