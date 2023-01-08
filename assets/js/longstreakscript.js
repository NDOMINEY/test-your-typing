// array for keys to be included in game
const key = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o",
"p","q","r","s","t","u","v","x","w","y","z","0","1","2","3","4","5","6",
"7","8","9","Enter","Shift","Space Bar"];


let currentScore = document.getElementsByClassName("current-score")[0];
let startScore = 0;


//run the game on screen load
window.onload = runLongStreakGame();

//back to games link added
document.getElementById("reset-btn").addEventListener('click', function(){
    window.location.href = 'gameselect.html';
})


/**
 * Runs game cycle
*/
function runLongStreakGame(){
    document.getElementsByClassName("randon-letter")[1].innerHTML = randomKey();

    if(startScore >= 0){
        document.addEventListener('keydown', userInput);
    }

}

/**
 * Runs key generation on push down
 */

function userInput(event){
        
    if(event.type === 'keydown'){
        let keyPressed = event.key;
        
        checkAnswer(keyPressed);
    }

    runLongStreakGame();

}

/**
 * Generates random string from the key array
*/
function randomKey(){
    //generate random number for key array index
    let i = Math.floor(Math.random() * 38);
    //returns random index from the key array
    return key[i];
}

/**
 * Checks whether key pressed is correct against the generated key challenge
*/

function checkAnswer(keyPressed){

    let answerResponse = document.getElementById("answer_status");
    let preText = document.getElementById("answer_pretext");

    if (document.getElementsByClassName("randon-letter")[1].innerHTML === keyPressed){
        startScore += 1;
        currentScore.innerHTML = startScore;
        preText.innerHTML = "Last answer was...";
        answerResponse.innerHTML = "CORRECT";
        answerResponse.style.color = 'green';

    }else if(document.getElementsByClassName("randon-letter")[1].innerHTML !== keyPressed){ 
        currentScore.innerHTML = startScore;
        preText.innerHTML = "Last answer was...";
        answerResponse.innerHTML = "INCORRECT";
        answerResponse.style.color = 'red';

        document.getElementsByClassName("randon-letter")[1].innerHTML = "Game Over";

        topScore();

    }

    return
}


function topScore(){
    document.removeEventListener('keydown', userInput);

    //set required variables

    let gameSpace = document.getElementsByClassName("game-space")[0];
    let popUp = document.getElementById("pop-up"); //container for pop-up//set required variables
    let popUpContent = document.getElementById("content");

    
    let nameRecord = document.getElementById("name"); //user input name in pop-up
    let score = document.getElementsByClassName("current-score")[0]; //total score from game
    let streakHighScore = {}; //create empty array ready to add high score too
    let retrievedScore = localStorage.getItem('streakHighScore'); //retrieves the data held in localStorage
    let stringScoreReturn = JSON.parse(retrievedScore); //return string value of localStorage

    console.log(retrievedScore);

    //hides game space
    gameSpace.style.display = "none";
    //bring pop up into view
    popUp.style.display = "block";
   
    
    if(retrievedScore !== null){

        let result = Object.keys(stringScoreReturn).map((key) => [Number(key), stringScoreReturn[key]]); //converts local data to array
        let number = result[0][1]; //holds value of current held high score
    
        
        //check whether a new high score has been achieved
        if(parseInt(score.innerHTML) > parseInt(number)){

            document.getElementById("submit").addEventListener('click',function(){

                console.log(nameRecord.value);
                console.log(parseInt(score.innerHTML));
    
                streakHighScore[nameRecord.value] = parseInt(score.innerHTML);
                localStorage.setItem('streakHighScore', JSON.stringify(streakHighScore));

                window.location.href = 'gameselect.html';
            })
        } else{
            popUpContent.innerHTML = `
                    <br><br>
                    <h2>Good job but no new highscore... </h2>
                    <br><br>
                `
            
            document.getElementById("submit").innerHTML = "Return to games!";
            
            document.getElementById("submit").addEventListener('click',function(){
                window.location.href = 'gameselect.html';
            })
            
        }

    } else {
        
        document.getElementById("submit").addEventListener('click',function(){

            console.log(nameRecord.value);
            console.log(parseInt(score.innerHTML));

            streakHighScore[nameRecord.value] = parseInt(score.innerHTML);
            localStorage.setItem('streakHighScore', JSON.stringify(streakHighScore));

            window.location.href = 'gameselect.html';
        })
    }
}
