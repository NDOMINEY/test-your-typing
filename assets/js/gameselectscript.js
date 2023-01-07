function timeHighScore(){

let timeChallengeName = document.getElementById("timechallenge-name");
let timeChallengeScore = document.getElementById("timechallenge-score");


let retrievedScore = localStorage.getItem('highScore');

    if(retrievedScore !== null){    

        let stringScoreReturn = JSON.parse(retrievedScore); //return string value of localStorage
        let result = Object.keys(stringScoreReturn).map((key) => [(key), stringScoreReturn[key]]); //converts local data to array
        let user = result[0][0]; //holds value of current user
        let number = result[0][1]; //holds value of current held high score

        timeChallengeName.innerHTML = user;
        timeChallengeScore.innerHTML = number;
    } else {
        timeChallengeName.innerHTML = "-";
        timeChallengeScore.innerHTML = "-";
    }
}

/**
 * streak scores
 */

function streakHighScore(){

    let streakChallengeName = document.getElementById("streakchallenge-name");
    let streakChallengeScore = document.getElementById("streakchallenge-score");
    
    
    let retrievedScore = localStorage.getItem('streakHighScore');

    if(retrievedScore !== null){    

        let stringScoreReturn = JSON.parse(retrievedScore); //return string value of localStorage
        let result = Object.keys(stringScoreReturn).map((key) => [(key), stringScoreReturn[key]]); //converts local data to array
        let user = result[0][0]; //holds value of current user
        let number = result[0][1]; //holds value of current held high score

        streakChallengeName.innerHTML = user;
        streakChallengeScore.innerHTML = number;
    } else {
        streakChallengeName.innerHTML = "-";
        streakChallengeScore.innerHTML = "-";
    }
}

timeHighScore ();
streakHighScore ();