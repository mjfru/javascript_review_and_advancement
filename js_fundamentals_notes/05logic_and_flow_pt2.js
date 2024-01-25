//! Controlling Program Logic & Flow Pt. 2

/*
! Truthy & Falsy Values
* All values have an inherent truthy or falsy boolean value.
  False values:
    - false
    - 0
    - "" (empty strings)
    - null
    - undefined
    - NaN
  * Everything else is truthy!
*/
let mystery = 5; // truthy
if (mystery) {
  console.log("Truthy");
}
else {
  console.log("Falsy");
}

let loggedInUser = 'matt1991';  // truthy

if (loggedInUser) {
  console.log("You are logged in!");
}
else {
  console.log("Please log in!");
}

/*
! Logical Operators
* && (and), || (or), ! (not)

? 'And' is created with && and takes two expressions on either side of it.
? To equate to true, BOTH expressions must equate to true!

? 'Or' is created with two pipe characters || and expressions on either side of it.
? If just ONE side is true, the WHOLE thing is true.

? 'Not' is created with an exclamation point (!) and works a little differently.
? It works on a single expression and returns TRUE if the expression is FALSE.

! A note on operator precedence:
* Not (!) has a higher precedence than && and ||. && has a higher precedence than ||.
You can alter this using parens ().
*/

//? And ?? Examples:
true && true; // true
true && false; // false
false && false; // false
1 <= 2 && 5 === 5; // true
'abc'.length === 3 && 1 + 1 === 4; // false

let password = 'taco tuesday';
if(password.length >= 6 && password.indexOf(' ') === -1) {
  console.log("Valid password");
}
else {
  console.log("Invalid password.");
}

let num = 3;
if (num >= 1 && num <= 10) {
  console.log("Number is between 1 and 10.");
}
else {
  console.log("Please guess a number between 1 and 10.");
}

//? Or || Examples:
1 !== 1 || 10 === 10 // true
10/2 === 5 || null // true
0 || undefined // false

let age = 76;
if (age < 6 || age >= 65) {
  console.log("You get in for free!");
}
else {
  console.log("That'll be $10 please.");
}

let color = "violet";
if (color === "purple" || color === "lilac" || color === "violet") {
  console.log("Great choice!");
}
else {
  console.log("Not the best choice...");
}

//? Not ! Examples:
!null // true
!(0 === 0) // true
!(3 <= 4) // false

let registeredUser;
// If there isn't a registered user...
if (!registeredUser) {
  console.log("Get outta here!");
}

let flavor = "watermelon";
if (flavor !== 'grape' && flavor !== 'cherry') {
  console.log("We don't have that flavor.")
}

// Or, another option:
if (!(flavor === 'grape' || flavor === 'cherry')) {
  console.log("We don't have that flavor.");
}

/*
! Switch Statements
? We can use a switch statement when we want to take and compare a value against a set of possible results.
* The 'break' keyword is introduced here to tell the switch statement to stop when it finds a match and not list the other possible results as well.
The syntax and examples are below:
*/
let day = 2;
switch(day) { // switch keyword and what we are checking
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day")
}

/*
! Ternary Operator
? Ternary, meaning three, allows us to run a logical statement in one line.
? It works with if / else cases.
* condition ? expressionIfTrue : expressionIfFalse;
*/

let number = 7;
if (num === 7) {
  console.log("lucky!");
}
else {
  console.log("not so lucky.");
}

//? Ternary Version:
num === 7 ? console.log("lucky!") : console.log("not so lucky.");

let onlineStatus = "offline";
// let yourColor;
// if (onlineStatustatus === "offline")  {
//   color = 'red';
// }
// else {
//   color = 'green';
// }
let yourColor = onlineStatus === 'offline' ? 'red' : 'green';