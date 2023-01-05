// array for keys to be included in game
const key = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o",
"p","q","r","s","t","u","v","x","w","y","z","0","1","2","3","4","5","6",
"7","8","9","Tab","Enter","Shift","Delete","Space Bar"];

let startTime = 40;
let timer = document.getElementsByClassName("count-down")[1];
let seconds = 0;
let currentScore = document.getElementsByClassName("current-score")[0];
let startScore = 0;


//run the game on screen load
window.onload = runTimedGame();

//back to games link added
document.getElementById("reset-btn").addEventListener('click', function(){
    window.location.href = 'gameselect.html';
})


/**
 * count down timer
*/
document.addEventListener('keydown', countDown, {once : true});

function countDown(){
    setTimeout(function(){
        startTime -= 1;
        timer.innerHTML = startTime;
        seconds++;
        if (seconds < 40) {           //  if the counter > 0, call the loop function
            countDown();             //  ..  again which will trigger another 
          }
    }, 1000);
}

/**
 * Runs game cycle
*/
function runTimedGame(){
    document.getElementsByClassName("randon-letter")[1].innerHTML = randomKey();

    if(startTime > 0){
    document.addEventListener('keydown', userInput);

        function userInput(event){
        
            if(event.type === 'keydown'){
                let keyPressed = event.key;
                
                checkAnswer(keyPressed);

                document.getElementsByClassName("randon-letter")[1].innerHTML = randomKey();
                
                if(startTime === 0){
                    document.getElementsByClassName("randon-letter")[1].innerHTML = "Game Over";
                }
            }
        }
    
    }else{
        return
    }
    
    return
}


/**
 * Generates random string from the key array
*/
function randomKey(){
    //generate random number for key array index
    let i = Math.floor(Math.random() * 42);
    //returns random index from the key array
    return key[i];
}

/**
 * Checks whether key pressed is correct against the generated key challenge
*/

function checkAnswer(keyPressed){

    let answerResponse = document.getElementById("answer_status");

    if (startTime !== 0 && document.getElementsByClassName("randon-letter")[1].innerHTML === keyPressed){
        startScore += 1;
        currentScore.innerHTML = startScore;
        answerResponse.innerHTML = "CORRECT"
    }else if(startTime !== 0 && document.getElementsByClassName("randon-letter")[1].innerHTML !== keyPressed){ 
        startScore -= 1;
        currentScore.innerHTML = startScore;
        answerResponse.innerHTML = "INCORRECT"

    }

    return
}


function topScore(){

}
