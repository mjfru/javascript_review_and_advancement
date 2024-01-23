//! JavaScript Values & Variables

//! Primitive Types:
/*
There are 5 main primitive types in JavaScript:
Number, String, Boolean, Null, & Undefined
Technically speaking, there are two more as well, Symbol & BigInt.
*/

//! Numbers
/*
*  JavaScript has ONE number type that includes: positives, negatives, whole numbers (integers), and decimal numbers (floats).

* Naturally, it also includes all the basic math operations you'd expect (+, -, *, /, and %)
When doing mathematical operations, standard order of operations still apply when using JavaScript.

* While not quite a number...there's also NaN as is considered numeric.
? NaN is a numeric value that represents something that's N(ot)A(N)umber!
0 / 0 and 54 + NaN, for example will result in getting a NaN.
? Doing something like 1/0 will result in getting 'infinity' as well.
*/


//! Variables
/*
Variables are like labeled jars for a value in JS.
* We can store a value and give it a name so we can recall it, use it, and/or change it later.
Variables capture information for us.
? Syntax:
*/

//? let variableName = value;
let age = 72;
let otherAge = 47;
age + otherAge // 119

age = age + 1; // 73

//* Some naming conventions are to make your variable names make sense, use camelCase; no dashes, underscores, or leading capital letters, and you cannot reuse the same variable name twice.

// To manipulate variables with mathematical operators, we can use the shorthand  +=, -=, *=...and so on.

let number = 3
number += 2 // number is now equal to 5.
let multipler = 5
number *= multipler // 15

//* Unary operators can also be used, they are used with variableName++, --
let newNumber = 4;
newNumber++

//* Declaring a variable with const (constant) works just like let but you cannot change the value!
const numberOfMovies = 100;
// numberOfMovies++ Results in an error.
// This should be used with variables that will not or cannot change.
const daysInWeek = 7;
const pi = 3.14159;

/*
? Before let and const were introduced, we used var to create variables.
Although not widely used at all in modern JS, you'll see a lot of documentation on JS using var; it's legacy content at this point.
Var is able to be changed and acts similarly to let until we start scoping our code to certain situations.
*/

var apples = 12;
