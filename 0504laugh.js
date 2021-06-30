/*
 * Programming Quiz: Laugh (5-4)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `laugh`
 * - Your code should include an anonymous function expression stored in the variable `laugh`
 * - Your anonymous function expression should take one argument
 * - Your anonymous function expression should return the correct number of `hahaha`\'s
 


var laugh = /* finish the function expression 

console.log(laugh(10));
*/


var sound = "";

var laugh = function(num) {
  for (var x = 0; x < num; x++) {
    sound += "ha";
  }
  sound += "!";
  return sound;
}

console.log(laugh(5));