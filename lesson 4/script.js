let min = 1; 
let max = 10;

let correct = 0;
let mistakes = 0;

document.querySelector('.add').onclick = function () {
    let numA = getRandomInt(min, max);
    let numB = getRandomInt(min, max);
    let correctAnswer = numA + numB;
    let userAnswer =  prompt(numA + ' + ' + numB + ' = ','');

    checkAnswer(correctAnswer, userAnswer);
};

document.querySelector('.sub').onclick = function () {
    let numA = getRandomInt(min, max);
    let numB = getRandomInt(min, max);
    
    if(numB > numA) {
        let temp = numB;
        numB = numA;
        numA = temp;
    }


    let correctAnswer = numA - numB;
    let userAnswer =  prompt(numA + ' - ' + numB + ' = ','');

   
    checkAnswer(correctAnswer, userAnswer);
};

document.querySelector('.mul').onclick = function () {
    let numA = getRandomInt(min, max);
    let numB = getRandomInt(min, max);
    let correctAnswer = numA * numB;
    let userAnswer =  prompt(numA + ' * ' + numB + ' = ','');

    checkAnswer(correctAnswer, userAnswer);
};

document.querySelector('.div').onclick = function () {
    let numA = getRandomInt(min, max);
    let numB = getRandomInt(min, max);

    numA = numA * numB;

    let correctAnswer = numA / numB;
    let userAnswer =  prompt(numA + ' / ' + numB + ' = ','');

    checkAnswer(correctAnswer, userAnswer);
};

document.querySelector('select').onchange = function() {
    let value = document.querySelector('select').value;

    switch(value) {
        case 'easy':
            min = 1;
            max = 10;
            break;
        case 'medium':
            min = 10;
            max = 100;
            break;
        case 'hard':
            min = 100;
            max = 1000;
}

    // if (value == 'easy') {
    //     min = 1;
    //     max = 10;
    // } 
    // else if (value == 'medium') {
    //     min = 10;
    //     max = 100;
    // }
    // else {
    //     min = 100;
    //     max = 1000;
    // }
};



function checkAnswer(correctAnswer, userAnswer) {

    if(correctAnswer == userAnswer) {
        alert('Ты прав!');
        correct = correct + 1;
    }
    else {
        alert ('Ой, ' + userAnswer + ' неправильный ответ,\n правильный ответ - ' + correctAnswer + '.');
        mistakes += 1;
    }
}

document.querySelector('.check').onclick = function() {
    alert('ИТОГО:\n' + correct + ' правильных ответов\n' + mistakes + ' неправильных ответов');
};

document.querySelector('.reset').onclick = function() {
    correct = 0;
    mistakes = 0;
};

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

