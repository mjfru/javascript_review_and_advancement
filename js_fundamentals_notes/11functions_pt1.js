//! Functions

/*
* Central to the language and probably the most important aspect of JavaScript are functions.
* They are reusable procedures that allow us to write modular code.
? We define a 'chunk' of code that we can then execute at a later point.
There's a two-step process for every function, we:
  1. Define the function, writing it
  2. Run the function (as many times as you need)

We've been using functions already in this course albeit we've called them methods thus far.
* To define our own... (the old way, a function statement):
?  function funcName() {
?    doSomethingHere
?  };
*/

"hello".toUpperCase()   // Built-in method, already defined for us

function greet() {    // Defining the function
  console.log('Hello there!');
};
greet();  // Calling the function

//? We can now use this function elsewhere too, like in a loop.
for (let i = 0; i < 2; i++) {
  greet();
}

// Dice Roll Function
function diceRoll() {
  let roll = Math.floor(Math.random() * 6) + 1;
  console.log(`Rolled a ${roll}.`);
}
diceRoll();

// function throwDice() {
//   diceRoll();
//   diceRoll();
//   diceRoll();
//   diceRoll();
//   diceRoll();
//   diceRoll();
// }
// throwDice();

/*
! Function Arguments - Inputs for your Functions
Right now, our simple functions accept zero inputs and their behavior can't be changed.
* By using arguments, we can pass in a value and it will impact what our function can do.
*/

'hello'.indexOf('o'); // Here, the argument is 'o'.

function greet(person) {
  console.log(`Hi, ${person}`)
};
greet('Matt'); // 'Hi, Matt'

function throwDice(rolls) {
  for (let i = 0; i < rolls; i++) {
    diceRoll();
  }
}
throwDice(3);

/*
! Accepting Multiple Arguments
! Note: Parameter is a placeholder name for an argument.
? throwDice(rolls) <-- Parameter    throwDice(4) <-- argument
* When making a function with multiple arguments, placement (seperated by a comma), typically DOES matter.
*/

function sum(x,y) {   // The placement doesn't matter too much here but...
  console.log(x + y);
}
sum(42, 61);  // (x is 42, y is 61)

function divide(a, b) { // Here it matters a lot more!
  console.log(a / b);
}
divide(1, 4); // (a is 1, b is 4)

/*
! The Return Statement
As of now, our functions print values out but do NOT return anything...
When we use functions, we're typically expecting a value to be return that we can use elsewhere.
* The return statement ENDS FUNCTION EXECUTION and specifies the value to be returned by that function.
*/

function square (x) {
  return x * x;
  console.log('Finished!')  // Will never run!
}

// function isPurple(color) {
//   if(color.toLowerCase() === 'purple') {
//     return true;
//     console.log('Did it!') // Will never run!
//   }
//   else {
//     return false;
//   }
// }

// function isPurple(color) {
//   if (color.toLowerCase() === 'purple') {
//     return true;
//   }
//   return false; // Else is redundant
// }

function isPurple(color) {
  return color.toLowerCase() === 'purple';  // Returns true or false anyway, the shortest way to write this function - only works for simple yes/no situations
}

function containsPurple(arr) {
  for(let color of arr){
    if (color === 'purple' || color === 'violet') {
      return true;
    }
  }
  return false;
}