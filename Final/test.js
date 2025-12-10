/*  Code written by Lincoln Willison
    Last fucked-around with on 10/12/2025
*/


function forLoopTest(runs){
  for (i = 1; i < runs; i += 1){
    //skips the loop at 11
    if (i == runs/2){
      continue;
    }
    document.writeln(i + "<br>");
  }
}

forLoopTest(22);


// λ