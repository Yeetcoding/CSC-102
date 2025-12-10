/*  Code written by Lincoln Willison
    Last updated 10/23/2025
*/

let counter = 0;
//setInterval Arguments: Code to run, how often to run code 
setInterval(function(){ // function that switches the title back and forth
  counter += 1;
  if (counter % 2 == 0){
    document.getElementById("heading").textContent = "LET ME OUT";
  }
  else{
    document.getElementById("heading").textContent = "Events";
  }
  console.log("test " + counter);
}, 500);

let intervalID = 0; //sets intervalID to be used later

function startImgMov(){ // function that moves around the image randomly 
  intervalID = setInterval(function(){
    let xCoord = randomRange(100,300);
    let yCoord = randomRange(100,400);

    document.getElementById("memeImg").style.left = xCoord + "px";
    document.getElementById("memeImg").style.top = yCoord +"px";

    //disables the start button, enables the stop button
    document.getElementById("btnStart").disabled = true;
    document.getElementById("btnStop").disabled = false;

  }, 500)
}

function stopImgMove(){ // stops the random movement of the image
  clearInterval(intervalID); // clears/stops the setInterval loop
  //Disables the stop button after being pressed, makes the start button available
  document.getElementById("btnStart").disabled = false;
  document.getElementById("btnStop").disabled = true;
}


// λ