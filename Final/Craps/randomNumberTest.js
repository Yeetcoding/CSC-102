/*  Code written by Lincoln Willison
    Last updated 10/04/2025
*/

function runRandom(){
  let finNum = randomRange(1,6);
  document.getElementById("finNum").textContent = finNum;
}

function randomRange(min, max){
  console.log("randomRange Running");
  let randomNum = Math.random();

  let result = (Math.ceil((max - min) * randomNum)) + (10 * Math.trunc(min / 10));
  console.log("Result = " + result);
  return result;
}

export{randomRange, runRandom};

// λ