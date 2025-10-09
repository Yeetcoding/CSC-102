function randomRange(min, max){
  console.log("randomRange Running");
  let randomNum = Math.random();

  let result = (Math.floor((max - min +1) * randomNum)) + min;

  console.log("Result = " + result);
  return result;
}

