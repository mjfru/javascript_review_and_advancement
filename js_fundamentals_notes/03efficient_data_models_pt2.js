//! Efficient Data Models Pt. 2

/*
! Null & Undefined
? Null is a primitive type that is the intentional absence of any value; you intentionally assign something the value of null.

? Undefinied represents a variable that does not have a value assigned to it.
It's usually a value we get back from JavaScript but don't give it any value.

laugh[7] // undefined
*/

let loggedInUser = null; // explicity nothing
// A user then logs in...
loggedInUser = "James Dean";

let color;  // undefined


/*
! Math Object
? A collection of different pieces of mathematical functionality with mathematical constants.
Some useful methods in the Math object include:
*/

Math.PI;
Math.round(4.9); // 5
Math.floor(3.657); // 3 - chops off the decimal
Math.pow(7, 2); // 49 (7 to the 2nd power)
Math.random();  //! Our most important in this object

/*
! Math.random() gives us a random decimal between 0 and 1 (non-inclusive).
Nothing gets passed in to the parentheses.
? However, since it only returns decimal numbers between 0 and 1, we need to manipulate it to get a range we actually want.
Let's say we want a random number between 1 and 10.
*/

const step1 = Math.random();  // Gives a random decimal
const step2 = step1 * 10; // Gives us that number going to 9.9999...
const step3 = Math.floor(step2);  // Chops off the decimal
const step4 = step3 + 1;  // To include 10, since Math.random() isn't inclusive of 1.0
// Or, in other words:
console.log(Math.floor(Math.random() * 10) + 1);


/*
! Type Of - This operator helps us determine the type of a give value.
No parentheses, no camelcase...it's a weird one! It's an operator just like +, -, *, etc.
*/

typeof 99; // "number"
typeof true // "boolean"
typeof null // "object" ... ???


/*
! parseInt & parseFloat - These are used to parse/change strings into numbers.
? parseInt will return a whole number, an integer.
? parseFloat will include a decimal number.
Be careful of what comes first in your input; if it's not a number, it'll result in getting NaN...because it's not!
*/

parseInt('21'); // 21
parseInt('21') + 1; // 22
parseFloat('33.5'); // 33.5
//! However:
parseInt('$99') // NaN
parseInt("99 dollars") // 99