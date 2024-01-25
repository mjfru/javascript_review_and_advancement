//! Capturing Collections of Data w/ Arrays

/*
! Creating Arrays
* Arrays are collections of values.
We see examples of arrays on sites like:
  - A List of comments on an Instagram post
  - A collection of levels in a game
  - Songs in playlist
? To make an array, we name it like a variable and wrap the content in square [] brackets. (Called array literal syntax)
? All data types (or none!) can go in an array and they don't have to even be of the same type.
*/

let students = [];
let colors = ['red', 'orange', 'yellow'];
let lottoNums = [19, 22, 56, 12, 51];
let stuff = [true, 68, 'cat', null];
let shoppingList = ['cereal', 'cheese', 'ice'];
console.log(shoppingList);

/*
! Arrays are indexed.
* Just like with strings, each character / value has a specific index within the array and starts at 0.
*/

colors[0] // red
stuff[3] // null
lottoNums[7] // undefined
colors[colors.length-1] // retrieves the last thing in the array, yellow

/*
! Modifying Arrays
* Using indices of arrays, we can change what an array holds; they ARE mutable, unlike strings.
*/

//? To update:
let newShoppingList = ["cheddar cheese", "2% Milk"];
newShoppingList[1] = "oat milk";
console.log(newShoppingList); // ["cheddar cheese", "oat milk"]

//? To add:
newShoppingList[2] = "yogurt";
console.log(newShoppingList);
newShoppingList[shoppingList.length] = 'apples'; // always adds to the end instead of counting
console.log(newShoppingList);

//! Array Methods
/*
! Push & Pop
* Push .push() will ADD content to the END of an array.
* Pop .pop() will REMOVE a value from the END of an array.

When you push, you are mutating the array itself!
Pop does too, but you can also store what you popped in a variable.
*/

let favoriteFoods = ["sushi", "ramen", "donburi", "kimchi"];
favoriteFoods.push("kebebs");
console.log(favoriteFoods);

favoriteFoods.pop();  // returns it to the originally-written array
console.log(favoriteFoods);
let deletedFood = favoriteFoods.pop();
console.log(deletedFood); // kimchi
console.log(favoriteFoods); // ['sushi', 'ramen', 'donburi']

/*
! Shift & Unshift
? Shift and unshift essentially do the same thing as push and pop...but from the START.
* Shift - remove from the start
* Unshift - add to the start and returns the new length of the array
Note: With unshift() (and push()), you can add multiple values at once, seperated by a comma.
*/

//? Unshift Examples:
let dishesToDo =['big plate'];
console.log(dishesToDo);
dishesToDo.unshift('large bowl');
console.log(dishesToDo);
dishesToDo.unshift('salad tongs');
dishesToDo.unshift('coffee mug');
console.log(dishesToDo);

//? Shift Examples:
dishesToDo.shift();
console.log(dishesToDo);
dishesToDo.shift();
console.log(dishesToDo);
dishesToDo.shift();
console.log(dishesToDo);