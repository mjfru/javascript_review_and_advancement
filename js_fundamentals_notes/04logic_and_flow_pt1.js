//! Controlling Program Logic & Flow Pt. 1

/*
! Boolean Logic - Comparisons
Of course, being able to compare things is an essential way to make decisions.
Maybe something is or isn't the same, greater than, less than, equal to, etc.
* The symbols in this section will be >, <, >=, <=.
? With numbers...:
*/

console.log(-2 > 1);    // false
console.log(10 < 999);  // true
console.log(2 >= 2);    // true
console.log(3 <= 3);    // true
"hello".length >= "hello".length // true

//? With strings:
'a' < 'A' // false
'B' < 'a' // true - uppercase come before all lowercase
'#' < '$' // true ... based on unicode order

/*
! Equality
* == (equality), != (not equal), === (strict equality), !== (stricy non-equality)

* == (double equals, the equality operator) checks for equality of value but NOT equality of type.
? It coerces both values to the same type and then compares them...leading to some wacky results.

* === (triple equals) cares about both the value AND the type.
? It's more precise and more specific with less 'unexpected' behavior since type matters here.
! Go with triple equals when you can, it's rare where a situation absolutely calls for double (==) equals.

* != non-equality is the polar opposite of the double (==) equals.
* !== again, is the polar opposite of the triple (===) equals and checks type as well as value.
*/

//? Double Equals Examples:
4 == 4 // true
'a' == 'a' // true
false == false // true
7 == '7' // true
0 == 's' // false
0 == '' // true
0 == false // true
null == undefined // true

//? Triple Equals Examples:
2 === '2' // false
0 === false // false
undefined === null // false
"hello" === "hello" // true
null === null // true

//? Non-equality Examples:
1 !=  2 // true
1 != 1 // false
1 !== '1' // true


//! Conditionals - Making Decisions!
/*
* if - The 'if' conditional allows us to run code IF a given condition is true.
? Syntax: if (conditional statement to be checked ) { do something if true }

* else if - If not the first conditional statement...try this one!
? Syntax: Exactly the same as an 'if' statement.

* else - Do this if nothing else equates to true.
? Syntax: else { do this }  - No need for a conditional!
*/

//? Examples
let rating = 2;
if (rating === 3) {
  console.log("It's pretty good!");
}
else if (rating === 2) {
  console.log("Meeting expectations.");
}
else if (rating === 1) {
  console.log("Needs improvement.");
}
else {
  console.log("Invalid rating!")
}

let num = 37;
if (num % 2 !== 0) {
  console.log("It's an odd number.");
}

let highScore = 1430;
let userScore = 1200;

if (userScore >= highScore) {
  console.log(`Congrats, you have the new high score of ${userScore}!`)
}
else {
  console.log(`GG, your final score was ${userScore}. Try again?`)
}

/*
! Nesting Conditionals
? For use when there's multiple layers of checks to be completed.
However, there are easier ways to accomplish this, sometimes in just one line.
*/
let password = "hello moto";
if (password.length >= 6) {
  if(password.indexOf(' ') === -1) {  // there is NO space 
    console.log("Valid password!");
  }
  else {
    console.log("Password is long enough but contains an invalid space.");
  }
}
else {
  console.log("Password must be longer");
}