//! Functions in Greater Detail Pt.1

/*
! Scope
* Scope can be imagined as variable visibility, what has access to your variable and what doesn't.
* The location where a variable is defined dictates where we have access to that variable.
*/

/*
! Function Scope
? These are variables only available when using a function.
We can call the function but we cannot view variables in a context outside the function they're declared in.
*/
function helpMe() {
  let msg = "I'm on fire!"; // msg is scope to the helpMe function ONLY
  msg;
}

console.log(msg); // Won't be found, undefined!

function laugh() {
  let person = "Tom";
  const age = "45";
  var color = "cyan";
}
console.log(person); // Not defined - Can only be used within the function.

let bird = 'duck';
function birdWatch() {
  let bird = 'mallard';   // Normally we'd be getting a message saying they can't have the same name. Scope changes this behavior, they don't 'live' at the same level.
}

/*
! Block Scope
* Similar to function scope, but this can be found in things like conditional statements.
? However, let and const have different scoping rules than the old 'var' style of declaring a variable.
! Var has NO block scope, it's available outside of any block and can lead to problems.
*/

if (true) {
  let animal = 'eel';   // this variable is scoped only to this - block -.
  console.log(animal);
}

console.log(animal); // 'animal is not defined'! 

if (true) {
  var animal = 'eel';   // this variable is scoped only to this - block -.
  console.log(animal);
}

console.log(animal); // available here due to the use of 'var'.

function doubleArr(arr) {
  const results = [];     // scoped in the function
  for (let num of arr) {
    let double = num * 2;  // block scope in the loop, still has access to 'results'
    results.push(double);
  }
  return results;
}
console.log(doubleArr([3, 7, 9])) // [6, 14, 18]

/*
! Lexical Scope
* When we have nested functions, such as in React, the outer variables are accessible in other functions nested within.
These variables are bound to the scope of their functions, lexically-bound, and is a one-way relationship.
*/

function outerFunction() {
  let hero = "Black Panther";

  function innerFunction() {
    let cryForHelp = `${hero}, please save me!`   //? <-- hero is accessible here!
    console.log(cryForHelp);
  }
  innerFunction();
}

function outer() {
  let movie = "Gladiator";    //? <-- available to nested functions in here
  function inner() {
    console.log(movie.toUpperCase());
  }
  inner();
}

// inner(); outside the function will NOT work

function outer() {
  let movie = "007";

  function inner() {
    let movie = "The Shining"

    function extraInner() {
      console.log(movie.toUpperCase());
    }
    extraInner();
  }
  inner();
}