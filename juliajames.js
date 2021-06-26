/*
Loop through the numbers 1 to 100
If the number is divisible by 3, print "Julia"
If the number is divisible by 5, print "James"
If the number is divisible by both 3 and 5, print "JuliaJames"
If the number is not divisible by 3 or 5, print the number
*/

var x = 1;

while (x <= 20) {
  if ((x % 3 === 0) && (x % 5 === 0)) {
    console.log("JuliaJames");
    x ++;
  } else if (x % 5 === 0) {
    console.log("James");
    x ++;
  } else if (x % 3 === 0) {
    console.log("Julia");
    x ++;
  } else {
    console.log(x);
    x ++;
  }

}