let secretWord = 'алгоритм'; 
let lettersArray = [];
let attempts = 3;

document.querySelector('.check').onclick = function (){
    let userLetter = document.querySelector('.letter').value;
    lettersArray.push(userLetter);
    let out = '';

    if(secretWord.indexOf(userLetter) == -1){
        attempts = attempts - 1;
        document.querySelector('span').innerHTML = attempts;
    }

    for(let i = 0; i < secretWord.length; i++) {
        //console.log(userLetter)

        if(lettersArray.indexOf(secretWord[i]) != -1) {
           out = out + secretWord[i];
        }
         else {
            out = out + '*';
         }
    }

    if(secretWord == out) {
        alert('Вы победили!');
    }

    if(attempts == 0){
        alert('Вы проиграли');
    }

    document.querySelector('.word').value = out;
    document.querySelector('.letter').value = '';
    document.querySelector('.letter').focus();
}

    document.querySelector('.start').onclick = function() {
        let out = '';
        for (let i = 0; i < secretWord.length; i++) {
            out = out + '*';
        }
        document.querySelector('.word').value = out;
        lettersArray = [];
        attempts = 3;
        document.querySelector('span').innerHTML = attempts;
    }
// написать генератор случайных слов; создать массив из слов; добавить генератор случайных чисел который генит от нуля до index(кол-во элементов  в массиве secretword == случайное слово)

const words = ['apple', 'banana', 'orange', 'pear', 'peach', 'grape'];

function generateWord() {
  // Генерируем случайное число от 0 до длины массива слов
  const randomIndex = Math.floor(Math.random() * words.length);
  // Получаем случайное слово из массива по индексу
  const randomWord = words[randomIndex];
  return randomWord;
}

// Пример использования
const secretWord = generateWord();
console.log(secretWord);

// Генерация случайного числа от 0 до длины массива слов
const randomNumber = Math.floor(Math.random() * words.length);
console.log(randomNumber);

const myPromise = new Promise((resolve, reject) => {

});

