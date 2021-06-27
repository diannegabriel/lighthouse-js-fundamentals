/*
 * Programming Quiz: Laugh it Off 2 (5-2)
 *
 * Write a function called `laugh` with a parameter named `num` that represents the number of "ha"s to return.
 *
 * Note:
 *  - make sure your the final character is an exclamation mark ("!")
 *  - make sure that your function produces the correct results when it is called multiple times
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a `laugh()` function
 * - Your `laugh()` function should have one parameter named `num`
 * - Your `laugh()` function should return the correct number of laughs
 
Directions:
Write a function called laugh() that takes one parameter, num that represents the number of "ha"s to return.
*/

function laugh(num) {
  var ha = "";
  while (num > 0) {
    ha += "ha"
    num--;
  }
  return ha + "!";
}

console.log(laugh(3));

/* EXPLANATION FROM https://web-prep-help.lighthouselabs.ca/t/udacity-5-2-laugh-it-off/3423

// Declaring a variable called sound as an empty string
// using let, which means we can reassign its value
let sound = ""; 
// If we were to call the function below with the argument num as 3 as we did on the last line:
// console.log(laugh(3)) ;
function laugh(num) { // num === 3
    for (let x = 0 ; x <= num ; x++) { // Starting with x being 0; while x is less than or equals to 3 (since num is 3 if we call laugh(3));
        sound = sound + "ha" ;  
        // when x is 0:  sound = "" + "ha"; the initial value of sound  "" + "ha". sound is now "ha"
        // repeat when x is 1: => sound = "ha" + "ha"; sound is now "haha"
        //  repeat when x is 2: => sound = "haha" + "ha"; ^
        // repeat when x is 3: => sound = "hahaha" + "ha"; ^
    } // x++ ( adds 1 to x); 
    sound = sound +"!";  // "hahahaha" + "!"
    return sound;  //return "hahahaha!"
}
console.log(laugh(3)) ; // Prints the return value of laugh(3), which is  "hahahaha!" one more "ha" than we expected.
As you have mentioned in your question, we have defined the variable sound as a global variable. Which creates the issue in that every time we call the laugh function, we are reusing and modifying the same variable! For example, by adding this line of code to the bottom of your solution:

console.log(laugh(0)); // this will print "hahahaha!ha!"
We can see how this could lead to many issues if we were expecting the laugh function to always return the number of laughs we gave the laugh function’s num argument.

Finally, I would recommend you to go through and learn about Scope 2 in javascript, as this will help you understand further with the question regarding the sound variable in your solution.

*/