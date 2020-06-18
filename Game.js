'use srict';

let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n)
};

let result = confirm('Вас приветствует игра "Загадывание случайного числа от 1 до 100"');

if (result) {
    game();
}

function game(){
    let guessNumber = 15;

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
        }
    
    }
}