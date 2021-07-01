function range(start, end, step) {
  let newArray = [];
  if ((start === undefined || end === undefined || step === undefined) || (start > end) || (step <= 0)) {
    newArray = [];
  } else {
      for (let num = start; num <= end; num += step) { 
         newArray.push(num);
    }
  }
  return newArray;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));