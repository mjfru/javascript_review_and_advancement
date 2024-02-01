//! Default Parameters & Spread - New-ish JavaScript Features Pt. 1! 

/*
! Default Parameters (The Old Way)
* If a user or program doesn't supply all the parameters, we can rely on default parameters, those that exist as a backup, to carry out our function.
? Without default parameters, if all the required parameters are not met, it will throw an error.
*/

//? Examples (the old way):
function multiply(x, y) {
  if(typeof y === ''); // if y isn't provided, if it's undefined...
  return x * y;
}
multiply(4, 5); // 20
multiply(4); // undefined

function findProduct(a, b) {
  b = typeof b !== 'undefined' ? b : 1;   // same idea in a ternary operator
  return a * b;
}
multiply(7); // 7
multiply(7, 3,); // 21

/*
! Default Parameters - The New Way!
* Now, we can set a default parameter right inside the parentheses.
? These default values can be strings, integers, arrays, objects...anything!
! Keep in mind, the order of your default parameters absolutely matters; defaults need to come at the end.
*/
function newMultiply(a, b = 1) {
  return a * b;
}
newMultiply(4); // 4
newMultiply(3, 5); // 15

const greet = (person, greeting = 'Hi') => {
  return `${greeting}, ${person}!`;
}

console.log(greet('Matt')); // 'Hi, Matt!'
console.log(greet('Matt', 'Good Evening')); // 'Good Evening, Matt!'

/*
! Spread
Extremely useful but difficult to explain.
* Spread syntax allows an iterable item (array, for example) to be -expanded- in places where zero or more arguments (for functions) or element (for array literals) are expected.
* For objects, it allows expressions to be expanded in places where zero or more key-value pairs are expected.
! The key word here is -expanded-.
? Syntactically, spread is always represented with three dots (...).
Lets look at it in a function call first:
*/

//? This expands an iterable (array, string, etc.) into a list of arguments:
const nums = [9, 3, 2, 8];
Math.max(nums); // NaN - It's not a number! It's an ARRAY of numbers
// Use spread!
Math.max(...nums); // 67 - This is the samew as calling Math.max(9, 3, 2, 8);
//* This breaks it up into multiple arguments, it spreads this array out over multiple arguments instead of just looking at it as one thing. (Stripping away the array brackets, essentially)

function giveMeFour(a, b, c, d) {
  console.log('a', a)
  console.log('b', b)
  console.log('c', c)
  console.log('d', d)
}

giveMeFour(4, 5, 6, 7);
const colors = ['red', 'orange', 'yellow', 'green'];
giveMeFour(colors); // a ['red', 'orange', 'yellow', 'green'], b undefined...
giveMeFour(...colors);

const str = 'GOAT' // If you spread a string...
giveMeFour(...str); // a - G b - O c - A d - T

/*
! Spread in Array Literals
* Using spread with array literals allows us to create new arrays using an existing one(s).
* It -spreads- the elements from one array into a new one.
? This is common to use when we need to make a new copy of an array!
*/

//? Examples:
const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6];
[...nums1, ...nums2]; // [1, 2, 3, 4, 5, 6];
['a', 'b', ...nums2]; // ['a', 'b', 4, 5, 6];
[...nums1, ...nums2, 7, 8, 9]; // [1, 2, 3, 4, 5, 6, 7, 8, 9];

const cats = ["tabby", "siamese"];
const dogs = ["boston terrier", "golden retriever"]
const dogsCopy = [...dogs];
const pets = [...cats, ...dogs];
console.log(pets);
// We could also do this method too with a longer syntax.
cats.concat(dogs);

//? Another use case:
console.log([...'abcdefghijklmnopqrstuvwxyz']); // Makes an array holding each letter as an individual string; same functionality as .split('')

/*
! Spread in Object Literals
* Copies properties from one object into another object literal
* You can only spread objects into other objects!
* If you have an object literal and try to spread an array or string into it, that's fine, you'll get key-value pairs based on the indices.
*/
const feline = {
  legs: 4,
  family: "Felidae"
}

const canine = {
  family: 'Caninae',
  hasFur: true
}

const dog = {
  ...canine,    // all of the properties from canine and...
  isPet: true,
  adorable: true
};

const houseCat = {
  ...feline,
  isGrumpy: true,
  personality: "unpredictable"
};

const catDog = {    // Since some properties are shared, they overwrite each other.
  ...canine,
  ...feline
}

const catDogClone = {
  ...catDog
}

const random = [...'hello', {...catDog}];
console.log(random);