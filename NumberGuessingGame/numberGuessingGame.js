let guess;
let attempt = 0;
let running1 = true;
let running2 = true;
let playAgain;

while(running1){
    let maxNum = 100;
    let minNum = 1;
    let answer = Math.floor(Math.random() * maxNum) + minNum;

    while(running2){
        guess = window.prompt(`Write a number between ${maxNum} - ${minNum}`);
        guess = Number(guess);

        if(isNaN(guess)){
            window.alert(`Please write a valid number.`);
        }
        else if((guess < minNum) || (guess > maxNum)){
            window.alert(`Please enter a valid number.`);
        }
        else{
            attempt++;
            if(guess > answer){
                window.alert(`Too Hight. Guess Another.`);
            }
            else if(guess < answer){
                window.alert(`Too Low. Guess Another`);
            }
            else{
                window.alert(`Congratulation! Right Guess.`);
                running2 = false;
            }
        }
    }

    window.alert(`You attempt ${attempt} times.`);

    playAgain = window.prompt(`Play Again? Yes or No`);

    if(playAgain == "Yes"){
        running1 = true;
        running2 = true;
    }
    else if (playAgain == "yes"){
        running1 = true;
        running2 = true;
    }
    else{
        running1 = false;
    }
}