/*  Code written by Lincoln Willison
    Last updated 11/25/2025
*/

// list of names of the heroes on the Z-Team that the code will use
let lstHeroes = ["Sonar", "Flambe", "Invisigal", "Punch-Up", "Prism", "Malevola", "Golem", "Waterboy"];

// function that is called when the button is pressed. 
// when the button is pressed, it sets the count at (or back to) 0 and starts the loop that displays -
// - the names of the heroes
function cycleHeroes(){
  let count = 0;

  intervalID = setInterval(function(){
    console.log(count);
    let heroName = lstHeroes[count];
    document.getElementById("heroName").textContent = heroName;
    // if statement that makes sure the loop stops at the last name
    if (heroName == "Waterboy"){
      clearInterval(intervalID);
    }
    else{
      count++
    }
  }, 800);
} 


// λ