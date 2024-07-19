let input = document.getElementById('input')
let btn = document.getElementById('btn')
let guesses = document.getElementById('guesses')
let wrng = document.querySelector('.wrng')

let answer = Math.floor(Math.random()*100)+1;

let numGuess = 0;

btn.addEventListener('click', function(){
    guessNumber();
})

function guessNumber(){
    if(input.value < 1 || input.value >100 || isNaN(input.value)){
        wrng.innerHTML = 'Please enter a number between 1 and 100';
    }
    else{
        numGuess++;
        guesses.innerHTML = 'No. of guesses: ' + numGuess;
        if(input.value > answer ){
            wrng.innerHTML = 'Your guess is too high';
        }
        else if(input.value < answer){
            wrng.innerHTML = 'Your guess is too low';
        }
        else{
            wrng.innerHTML = 'Correct! You guessed it in ' + numGuess + ' guesses';
            btn.disabled = true;
            setTimeout(() => {
                resetGame();
            }, 5000);
        }
}
}

function resetGame(){
    numGuess = 0;
    guesses.innerHTML = 'No. of guesses: 0';
    wrng.innerHTML = '';
    input.value = '';
    btn.disabled = false;
    answer = Math.floor(Math.random()*100)+1;
    
}