// array for keys to be included in game
let key = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o",
"p","q","r","s","t","u","v","x","w","y","z","0","1","2","3","4","5","6",
"7","8","9","Tab","Enter","Shift","Delete","Space Bar"];


let currentScore = document.getElementsByClassName("current-score")[0];
let startScore = 0;

//run the game on screen load
window.onload = runTimedGame();



/**
 * Runs game cycle
 */
function runTimedGame(){
    document.getElementsByClassName("randon-letter")[1].innerHTML = randomKey();

    document.addEventListener('keydown', userInput, false); 

    function userInput(event){
        if(event.type === 'keydown'){
            let keyPressed = event.key;
            //document.getElementsByClassName("randon-letter")[1].innerHTML = keyPressed;
            checkAnswer(keyPressed);

        }

    } 
    
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

    if (document.getElementsByClassName("randon-letter")[1].innerHTML === keyPressed){
        startScore += 1;
        currentScore.innerHTML = startScore;
        return true;
    }else{
        startScore -= 1;
        currentScore.innerHTML = startScore;
        return false;
    }
}

function topScore(){

}