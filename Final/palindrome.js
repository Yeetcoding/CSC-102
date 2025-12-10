/*  Code written by Lincoln Willison
    Last updated 11/04/2025
*/


// function that checks if the given word (variable -> word) is a palindrome or not
function paliCheck(word){
  let revWord = "";
  // for loop that adds to an empty variable (variable -> revWord) to spell the given word backwards
  for(let count = word.length - 1; count >= 0; count--){
    revWord += word[count];
  }
  console.log("word = " + word + ", revWord = " + revWord);

  // checks to see if the word written backwards is the same forwards
  if (revWord == word){
    return true;
  }
  else{
    return false;
  }
}

// function that is activated when the button is pressed -- runs the palindrome test and gives results
function paliLoop(){
  let resultText = document.getElementById("result")

  let iptWord = document.getElementById("iptWord").value.trim();
  console.log(iptWord.length);
  if (paliCheck(iptWord)){
    resultText.textContent = "Inputted word is a palindrome!";
  }
  else{
    resultText.textContent = "Inputted word is not a palindrome.";
  }
}


// λ