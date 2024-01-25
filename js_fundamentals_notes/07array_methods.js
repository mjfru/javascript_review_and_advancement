//! More Array Methods

/*
! concat
* .concat() is used to merge two or more arrays and returns a NEW array.
*/

let fruits = ['apple', 'banana'];
let veggies = ['asparagus', 'brussel sprouts'];
console.log(fruits.concat(veggies));
console.log(veggies.concat(fruits));  // Order matters!
let meats = ["steak", "chicken"];
let allFood = fruits.concat(veggies, meats);
console.log(allFood);

/*
! includes & indexOf
* Includes is a boolean method that will tell you if a value exists or not.
One optional thing we can include is fromIndex with includes, seperated by a comma.

* IndexOf also searches an array but instead returns the index where the specified value is located. It returns -1 if it is NOT present.
It can take a fromIndex value as well, if needed.
*/

//? Includes Examples:
console.log(allFood.includes("shrimp")); // false
console.log(allFood.includes("banana")); // true
allFood.includes("asparagus", 3)

if(allFood.includes("flour")) {
  console.log("Not gluten-free!")
}

//? indexOf Examples:
console.log(allFood.indexOf("steak")); // 4
console.log(allFood.indexOf("cheese")); // -1

/*
! Reverse
* Reverse does what it sounds like: it reverses an array - in place - and mutates the original array.
*/

//? Reverse Example:
languages = ["JavaScript", "Ruby", "Python", "C#"];
languages.reverse();
console.log(languages);

/*
! Join
* Join takes an array and spits out a string where it joins all of the elements into a single string.
? The default seperator to be between values is a comma, but we can change that within the parentheses.
This method will change any value, booleans, integers, etc. into a string for us as well.
*/

//? Join Example:
let languagesString = languages.join(", ");
console.log(languagesString);

/*
! Slice
* Slice takes a portion of an array and makes a new array with it. It does not mutate the original array!
It takes two variables, where to begin the slice and up to which it should stop. The second argument is NOT inclusive.
Slice can also take negative numbers to work through the array backwards.
? array.slice() is a quick way to make a copy of a pre-existing array
*/

let animals = ["sharks", "salmon", "whale", "bear", "lizard", "tortoise"];
let swimmers = animals.slice(0, 3);
console.log(swimmers); // ['sharks', 'salmon', 'whale'];
let mammals = animals.slice(2, 4);
console.log(mammals); // ['whale', 'bear']
// let reptiles = animals.slice(4, 6);
let reptiles = animals.slice(4); //? Just slicing from one number will assume to go to the end
let animalsCopy = animals.slice();

/*
! Splice
* Not to be confused with slice, it removes, replaces, or adds values into an array; typically used to target areas in the middle of an array.
* Splice can take up to three arguments, the starting index, how many things to delete, and what you want to insert. Not all three are required.
*/

//? Splice Examples:
// Inserting
animals.splice(1, 0, "octopus");  // Insert at index 1, delete nothing, insert 'octopus' at 1
console.log(animals);

animals.splice(3, 0, "snake", "frog");
console.log(animals);

// Deleting
animals.splice(2, 2); // Starting at index 2, delete two values
console.log(animals); // 'salmon and whale' are gone!

/*
! Sort (Part 1)
* The sort method sorts the elements of an array in place and returns it.
For strings, it'll automatically sort things by alphabetical values.
Numbers, however, are a little funky as they're sorted by their unicode values.
How to go about this will be revisted soon.
*/

let nums = [34, 10, 10000, 35, 99];
console.log(nums.sort());

/*
! Reference Types
When we work with primitive types, we create a value type variable.
In memory, JS stores every single variable and the actual value is stored.
If you use a primitive type, that value itself gets stored.

For large things like arrays, this doesn't work.
* JS stores a reference (hence reference type) to the array instead, like an address.
* The variable that holds the array is a pointer, showing JS where the array is located in memory.
Therefore, if you mutate an array and reference it with something else, the changes will still be there.
With primitive types, this is not the case.
*/

//? Consider the following
let fruit = "orange";
let color = fruit; // holds "orange"
fruit = "watermelon";
console.log(color); // still "orange"

/*
! Using const with Arrays
? You'll often see people using const with arrays. Why?
* This is because as long as the reference, the array's name, doesn't change, the values within can.
*/

const myEggs = ["brown", "brown"];
myEggs.push('white');
myEggs[1] = "green"
console.log(myEggs);
//? All of this is okay, myEggs is still unchanged, just the contents are.

/*
! Working with Nested Arrays (Multi-Dimensional Arrays)
Arrays are convenient because we can put anything we want in them...including other arrays!
* To access, change, etc. these values, indicate which index the nested array is, then use another pair of brackets [] to access the index within.
*/

const animalPairs = [
  ["doe", "buck"],
  ["ewe", "ram"],
  ["peahen", "peacock"]
];

console.log(animalPairs[2][0]) // "peahen"
animalPairs[0][1] = "stag";

// Often, nested arrays are used to create a 'board' of sorts.
const board = [
  ['O', null, 'X'],
  [null, 'X', 'O'],
  ['X', 'O', null]
];