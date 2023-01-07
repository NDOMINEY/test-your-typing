let timeChallengeName = document.getElementById("timechalleng-name");
let timeChallengeScore = document.getElementById("timechalleng-score");


let retrievedScore = localStorage.getItem('highScore');
let stringScoreReturn = JSON.parse(retrievedScore); //return string value of localStorage
let result = Object.keys(stringScoreReturn).map((key) => [(key), stringScoreReturn[key]]); //converts local data to array
let user = result[0][0]; //holds value of current user
let number = result[0][1]; //holds value of current held high score



timeChallengeName.innerHTML = String(user);
timeChallengeScore.innerHTML = number;