'use srict';

let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n)
};

function getRandomInlusive(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
}

let result = confirm('Вас приветствует игра "Загадывание случайного числа от 1 до 100"');

if (result) {
    game();
}

function game(){
    let guessNumber = getRandomInlusive(1,100);
    console.log(guessNumber);

    check();

    function check (){
        
        let number = +prompt('Угадай число от 1 до 100');

        if (number === 0) {
            return;
        } 
        if (number>guessNumber) {

            alert('Загаданное число меньше');

        } if (number<guessNumber) {

            alert('Загаданное число больше');

        } if (!isNumber(number)) {

           alert('Введите число!');
        } 
        if(number!=guessNumber) {
            check ();
        } else {
            alert ('Вы угадали ! Ваш приз ААААААвтомобиль ! Лада под калиной');
        }
    
    }
}