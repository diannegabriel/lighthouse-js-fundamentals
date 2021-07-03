// Need to find the two largest numbers
// Use for loops to find the two largest numbers
// Use if else for conditionals

const sumLargestNumbers = function(data) {
  let oneLarge = 0;
  let twoLarge = 0;
  // for loop to find the first largest number (oneLarge)
  for (let i = 0; i < data.length; i++) {
    // if conditional to find the first largest number
    if (data[i] > oneLarge) {
      oneLarge = data[i];
    }
    // for loop to find the second largest number (secondLarge)
    for (let j = 0; j < data.length; j++) {
      // if conditionals to find the second largest number
      if (data[j] > twoLarge && data[j] < oneLarge) {
        twoLarge = data[j];
      }
    } 
  }
// Sum of the first and second largest number
  return oneLarge + twoLarge
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));