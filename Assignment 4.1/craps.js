/*  Code written by Lincoln Willison
    Last updated 10/07/2025

    Rules of craps: roll sum of 7 or 11 is a loss, 2 even numbers is a win, anything else 
    is a re-roll

*/

let runCount = 0;
let gameResult = "";
let winCount = 0;
let loseCount = 0;

function gameLoss(){
  console.log("You Lose!");
  document.getElementById("gameResult").textContent = gameResult;
  document.getElementById("winGif").style.display = 'none';
  document.getElementById("loseGif").style.display = 'inline';
  document.getElementById("stagnPic").style.display = 'none';
  loseCount += 1;
}

function gameWin(){
  console.log("You Win!");
  document.getElementById("gameResult").textContent = gameResult;
  document.getElementById("winGif").style.display = 'inline';
  document.getElementById("loseGif").style.display = 'none';
  document.getElementById("stagnPic").style.display = 'none';
  winCount += 1;
}

function gameStagn(){
  console.log("Stagnant");
  document.getElementById("gameResult").textContent = gameResult;
  document.getElementById("winGif").style.display = 'none';
  document.getElementById("loseGif").style.display = 'none';
  document.getElementById("stagnPic").style.display = 'inline';
}

function basicCraps(){
  runCount += 1;
  console.log("basicCraps was ran " + runCount +" times");

  let roll1 = randomRange(1,6);
  let roll2 = randomRange(1,6);
  let sum = roll1 + roll2;

  document.getElementById("roll1").textContent = roll1;
  document.getElementById("roll2").textContent = roll2;
  document.getElementById("sum").textContent = sum;
  document.getElementById("winCount").textContent = winCount;
  document.getElementById("loseCount").textContent = loseCount;
  document.getElementById("runCount").textContent = runCount;

  if (sum == 7 || sum == 11){
    gameResult = "CRAPS -- YOU LOSE!";
    gameLoss();
  }
  
  else if ((roll1 % 2) == 0 && (roll2 % 2) == 0){
    gameResult = "YOU WIN!";
    gameWin();
  }
  else{
    gameResult = "No win, no loss. Try again!";
    gameStagn();
  }

}


// λ