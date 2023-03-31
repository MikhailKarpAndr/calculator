let secretNumber = getRandomInt(1, 10); //обьявление переменной (getRandomInt-функция и параметры в ней два числа в промежутке от до)
let attempts = 3; //кол -во ошибок(переменаая)
    document.querySelector('.start').onclick = function() { //Через объект вы можете работать со всеми HTML объектами на странице сайта. Вы можете находить элементы по их ID, классу или имени тега и добавлять к ним свойства и менять их значени
    document.querySelector('.number').disabled = false; //QuerySelector - это метод, который вернет первое вхождение элемента (Element) документа, который соответствует указанному тегу, или селектору, или группе селекторов. Если совпадений не найдено, вернет null.
    document.querySelector('.check').disabled = false; 
    attempts = 3;
    secretNumber = getRandomInt(1, 10); //function - получение рандомного целого числа
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    document.querySelector('span').innerHTML = attempts;
}
document.querySelector('.check').onclick = function () {
    let userNumber = document.querySelector('.number').value;
    attempts = attempts - 1;
    document.querySelector('span').innerHTML = attempts;
    if(attempts == 0) { //условие через иф и в скобках правило условия
        document.querySelector('.number').disabled = true;
        document.querySelector('.check').disabled = true;
    }
    document.querySelector('.number').value = '';
    document.querySelector('.number').focus();
    if (secretNumber == userNumber) {
        alert('Правильно!');
        document.querySelector('.number').disabled = true;
        document.querySelector('.check').disabled = true;
    }
    if (secretNumber > userNumber) {
        alert('Секретное число - больше!');
    }
    if (secretNumber < userNumber) {
        alert('Секретное число - меньше!');
    }
};
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}




