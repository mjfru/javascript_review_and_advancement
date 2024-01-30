//! Functions in Greater Detail Pt.2

/*
! Function Expressions
* There's another syntax we can use to define functions, these are called function expressions.
? This works because functions are technically objects!
Knowing about function expressions will benefit us later when looking at hoisting and moving functions around.
*/

//? Examples:
const square = function(num) {    // the function has no name, it's just stored in a named variable.
  return num * num;
}
square(7);  // looks just like our normal functions!

function add(x, y) {
  return x + y;
}

const sum = function(x, y) {    // When not named, this is called an anonymous function. It will NOT work by itself, however.
  return x + y;
}
console.log(sum(3, 5))

//* Keep in mind, when using function expressions, the functions declared in your variable don't always have to be anonmyous, they can be named too:
const product = function multiply(x, y) {
  return x * y;
}

product(3, 9); // multiply(3, 9) won't work!

/*
* We can store functions in various ways...including arrays!
It's not terribly useful but the point is that we can loop over functions and call them.
*/

//? Function Statements
function add(x, y) {
  return x + y;
}

function multiply(x, y) {
  return x * y;
}

//? Function Expressions
const subtract = function(x,y) {
  return x - y;
}

const divide = function(x, y) {
  return x / y;
}

//? Now stored in an array!
const operations = [add, subtract, multiply, divide];

//! You can now access these by utilizing their index.
operations[1]; // subtract

//! To use them...
operations[1](20, 5) // 15

for(let func of operations) {
  let result = func(30, 5);
  console.log(result);  // 35, 25, 150, 6
}

//? Stored in an object (more on this later...):
const thing = {
  doSomething: multiply
}
thing.doSomething(50, 2); // 2  //* Congrats, this is a method!

/*
! Higher Order Functions
* These are functions that operate on/with other functions. They can:
  - Accept other functions as arguments
  - Return a function
*/

//? Accepting a function as an argument (Common in JS)
function callTwice(func) {
  func();
  func();
}

function laugh() {
  console.log("Hahahahaha");
}
callTwice(laugh); // No need for parens

function cry() {
  console.log("Waaaaaaa")
}

//

function repeat(action, num) {
  for(let i = 0; i < num; i++) {
    action();
  }
}
repeat(laugh, 3);

function pickOne(f1, f2) {
  let rand = Math.random();
  if(rand < 0.5) {
    f1();
  }
  else {
    f2();
  }
}
pickOne(cry, laugh);

/*
! Returning a function...from a function!
This can be thought of a 'function factory'.
*/
function multiplyBy(num) {
  return function(x) {
    return x * num;
  }
}
const triple = multiplyBy(3);   //? All of these may be used as functions now.
const double = multiplyBy(2);   //? What we pass into the parens acts as the 'x
const halve = multiplyBy(0.5);
triple(5);
halve(6);

//
function makeBetweenFunc(min, max) {
  return function(val) {
    return val >= min && val <= max;
  }
}

const isChild = makeBetweenFunc(0, 18);
isChild(17); // true
isChild(99); // false

const inAgeRange = makeBetweenFunc(18, 100);
inAgeRange(17); // false
inAgeRange(68); // true

const isNineties = makeBetweenFunc(1990, 2000);
isNineties(1989); // false
isNineties(1992); // true

/*
! Callback Functions (Callbacks)
* A callback function is a function passed into another function as an argument, which is then invoked inside the outer function.
(We've done this before just above in the callTwice() function).
We often pass in an anonymous function when using callback functions.
*/

//? Examples:
function grumpus() {
  alert("Welcome!")
}
setTimeout(grumpus, 5000); // runs a block of code after a certain amount of ms.

setTimeout(function() {   // same functionality but there's no need to declare the function outside
  alert("Welcome!");
}, 5000)

//? If we had a button in our HTML...:
const btn = document.querySelector('button'); // selects the button (more on this later)
btn.addEventListener('click', grumpus) // on a click, do this function

/*
! Hoisting
When JS interepts code, it 'hoists' up the variable declaration.
Declare and initialize your variables before you use them.
* var is hoisted, let and const are not.
*/
// This works:
var animal = "Tapir";
console.log(animal);

// But this doesn't!
console.log(animal);  // undefined, animal doesn't exist yet (ignore the above code...)
var animal = "Tapir";

let shrimp = "Harlequin Shrimp";
console.log(shrimp);

// console.log(shrimp);  Cannot access 'shrimp' before declaration
// let shrimp = "Harlequin Shrimp";

//? With Functions:
howl();   // This is hoisted! It works even if it comes before the actual declaration.

function howl() {
  console.log("Awoooooo");
}

//? With Function Expressions:
hoot();     // Will not work, expressions aren't quite hoisted. The variable 'hoot' is hoisted but the value is not.
var hoot = function() {
  console.log("Hoo hoo");
}
