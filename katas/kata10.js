const multiplicationTable = function(maxValue) {
  let line = "";

  for (let y = 1; y <= maxValue; y++) {
    for (let x = 1; x <= maxValue; x++) {
      line += y * x + " ";
    }
    line = line + "\n";
  } 
  return line
};



console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));