let timeChallengeName = document.getElementById("timechallenge-name");
let timeChallengeScore = document.getElementById("timechallenge-score");


let retrievedScore = localStorage.getItem('highScore');
let stringScoreReturn = JSON.parse(retrievedScore); //return string value of localStorage
let result = Object.keys(stringScoreReturn).map((key) => [(key), stringScoreReturn[key]]); //converts local data to array
let user = result[0][0]; //holds value of current user
let number = result[0][1]; //holds value of current held high score



timeChallengeName.innerHTML = String(user);
timeChallengeScore.innerHTML = number;

/**
 * streak scores
 */

let streakChallengeName = document.getElementById("streakchallenge-name");
let streakChallengeScore = document.getElementById("streakchallenge-score");


let streakRetrievedScore = localStorage.getItem('streakHighScore');
let streakStringScoreReturn = JSON.parse(streakRetrievedScore); //return string value of localStorage
let streakResult = Object.keys(stringScoreReturn).map((key) => [(key), streakStringScoreReturn[key]]); //converts local data to array
let streakUser = streakResult[0][0]; //holds value of current user
let streakNumber = streakResult[0][1]; //holds value of current held high score



streakChallengeName.innerHTML = String(streakUser);
streakChallengeScore.innerHTML = streakNumber;