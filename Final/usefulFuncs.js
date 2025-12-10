/*  Code written by Lincoln Willison
    Last updated 10/23/2025
*/

function randomRange(min, max){
  console.log("randomRange Running");
  let randomNum = Math.random();

  let result = (Math.floor((max - min +1) * randomNum)) + min;

  console.log("Result = " + result);
  return result;
}


/*
document.getElementById("") useful tags:
  .textContent - changes the text of the element
  .value - takes the given value of the element, used with inputs
  .style
  .display - changes whether or not or how the element is displayed
*/


// λ