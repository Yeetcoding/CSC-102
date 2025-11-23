/*  Code written by Lincoln Willison
    Last updated 11/22/2025
*/

// this function adds the audio to the page when the "add audio button is pressed and makes the other buttons appear
function addAudio(){
  let audioElm = document.createElement("audio");
  audioElm.setAttribute("id", "myAudio");
  audioElm.setAttribute("src", "wooooooooo.mp3");
  audioElm.setAttribute("controls", "controls");

  document.getElementById("divAudio").appendChild(audioElm);

  document.getElementById("btnAddAudio").hidden = true;
  document.getElementById("btnPlayAudio").hidden = false;
  document.getElementById("btnPauseAudio").hidden = false;
}

// this function plays the audio
function playAudio(){
  let audio = document.getElementById("myAudio");
  audio.play();
}

// this function pauses the audio
function pauseAudio(){
  let audio = document.getElementById("myAudio");
  audio.pause();
}


// λ