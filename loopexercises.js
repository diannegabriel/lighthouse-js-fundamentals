/*
 * Programming Quiz: Changing the Loop (4-4)
 */
/*
 * QUIZ REQUIREMENTS
 * - Your code should use a `for` loop
 * - Your `for` loop should specify a starting condition `x` with the value of `9`
 * - Your `for` loop should have a stop condition for the value of `x`
 * - Your `for` loop should decrement `x` each time it executes
 * - Your code should produce the expected output, as explained above
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */
 
/* rewrite the while loop as a for loop
var x = 9;
while (x >= 1) {
    console.log("hello " + x);
    x = x - 1;
}
*/

for (var x = 9; x >= 1; x--) {
  console.log("hello "+x);
}


//fix the error quiz

/*
 * Programming Quiz: Fix the Error 1 (4-5)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should use a `for` loop
 * - Your `for` loop should specify a starting condition `x` with the value of `5`
 * - Your `for` loop should have a stop condition for the value of `x`
 * - Your `for` loop should increment `x` each time it executes
 * - Your code should produce the expected output, as explained above
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */
 
/* fix the for loop
for (x < 10; x++) {
  console.log(x);
}
*/

for (var x = 5; x < 10; x++) {
  console.log(x);
}

/*
 * Programming Quiz: Fix the Error 2 (4-6)
 */
/*
 * QUIZ REQUIREMENTS
 * - Your code should use a `for` loop
 * - Your `for` loop should specify a starting condition `k` with the value of `0`
 * - Your `for` loop should have a stop condition for the value of `k`
 * - Your `for` loop should increment `k` each time it executes
 * - Your code should produce the expected output, as explained above
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */
 
/* fix the for loop
for (var k = 0 k < 200 k++) {
  console.log(k);
}
*/

for (var k = 0; k < 200; k++) {
  console.log(k);
}

// factorials

/*Write a for (note: not a function) loop that prints out the factorial of the number 12:

A factorial is calculated by multiplying a number by all the numbers below it. For instance, 3! or "3 factorial" is 3 * 2 * 1 = 6

3! = 3 * 2 * 1 = 6
*/
let solution = 1;

for (let x = 1; x <= 12; x++) {
  solution *= x;
}

console.log(solution);