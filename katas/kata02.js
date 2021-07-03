const conditionalSum = function(values, condition) {
  let sum = 0;
  if (condition === "even") {
    let valEven = 0;
    for (let i = 0; i < values.length; i++) {
      if (values[i] % 2 === 0) {
        valEven += values[i];
      }
      sum = valEven;
    }
  } else if (condition === "odd") {
    let valOdd = 0;
    for (let i = 0; i < values.length; i++) {
      if (values[i] % 2 === 1) {
        valOdd += values[i];
      } 
      sum = valOdd;
    }
  }
  return sum
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));