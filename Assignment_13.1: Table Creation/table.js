/*  Code written by Lincoln Willison
    Last updated 12/02/2025
*/

// function that contains the information to be displayed in the table and... 
// ...the for loops that cycle through the data 
function loadTable(){
  // 2d array that holds the data
  let arrayProblems = [
    // Name, Launch Year, Misson End, Objective
    ["Sojourner (Pathfinder)", 1996, 1997, "Land a rover on Mars"],
    ["Spirit", 2003, 2011, "Clues of Past Water"],
    ["Opportunity", 2003, 2019, "Mars Surface Exploration"],
    ["Curiosity", 2011, "Ongoing", "Determine if Mars was ever able to support microbial life"],
    ["Perserverance", 2020, "Ongoing", "Seek signs of ancient life and collect samples of rock and regolith for possible earth return"],
  ];

  // for loop and embedded for loop that goes through the data and puts it within the table on the webpage
  for(let i = 0; i < arrayProblems.length; i++){
    let tr = document.createElement("tr");
    
    for(let j = 0; j < arrayProblems[i].length; j++){
      let td = document.createElement("td");
      td.textContent = arrayProblems[i][j];
      tr.appendChild(td);
    }

    document.getElementById("tblRovers").appendChild(tr);
  }
}

// λ