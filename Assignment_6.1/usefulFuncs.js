/*  Code written by Lincoln Willison
    Last updated 10/12/2025
*/

function randomRange(min, max){
  console.log("randomRange Running");
  let randomNum = Math.random();

  let result = (Math.floor((max - min +1) * randomNum)) + min;

  console.log("Result = " + result);
  return result;
}


// λ