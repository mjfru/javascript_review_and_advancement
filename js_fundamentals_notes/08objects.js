//! Objects - The Core of JavaScript
/*
An object allows us to store data and associate it, give the data labels, etc.
* They are collections of properties. (remember .length? That's a property!)
* Properties are a key-value pair.
  username: "matt201",
  upvotes: 7,
  age: 32
* Rather than accessing data using an index, we use custom keys.
If order is paramount, use an array, if not, use an object!

? How do we define objects?
* We use curly boys {}! This syntax is known as an object literal.
* Just like arrays, we can use let or const as it's a reference to the data, and follow normal naming conventions.
* From there, we assign a key, a colon :, and its value of any data type.
* Each key-value pair must be seperated by a comma.
Side note: When we make a key-value pair, the keys are automatically converted to a string.
? Now, how do we get information OUT of objects?
* We use the dot . syntax.
*/

//? Object Example(s):
const fitData = {
  totalSteps: 308727,
  totalMiles: 211.7,
  averageCalorieBurn: 5755,
  workoutsThisWeek: '5 of 7',
  avgGoodsleep : '2:13',
}

fitData.totalMiles; // 211.7
fitData.averageCalorieBurn; // 5755

/*
* We can also use square [] bracket notation to access values of keys.
? This allows us to access keys that JavaScript typically wouldn't like, such as integers.
When you want to use a variable or some dynamic value as key, you have to use square brackets.
*/

const numbers = {     // This example provides a certain problem when trying to access values.
  100: 'one-hundred',
  16: 'sixteen'
}

console.log(numbers[100]); // one-hundred
console.log(numbers['100']); // one-hundred

const palette = {
  red: '#eb4d4b',
  yellow: '#f9ca24',
  blue: '#30336b'
}

let mysteryColor = 'yellow';

palette.blue; // #30336b
palette.yellow; // #f9ca24;
palette['yellow'];  // #f9ca24;
palette[mysteryColor] // #f9ca24;

/*
! Adding & Updating Properties to Objects
* To update or add to an object, it's very similar; we can use dot or square bracket notation but now we need an equal sign to assign a value.
*/

const userReviews = {

}

//? Adding Examples:
userReviews['queenBee49'] = 4.0;
console.log(userReviews);
userReviews.mrSmith78 = 3.5;
console.log(userReviews);

//? Updating Examples:
userReviews.mrSmith78 = 4.0; // updated!
console.log(userReviews);
userReviews['queenBee49'] += 2; // 6
console.log(userReviews);

/*
! Nesting Objects
* We can also fill objects with...other objects and is very common!
Simply chain together notations, imagine going into appropriate layers and access the data there.
*/

//? Object containing an Array and an Object:
const student = {
  firstName: 'David',
  lastName: 'Jones',
  strengths: ['Music', 'Art'],
  exams: {
    midterm : 92,
    final: 88
  }
};

student.strengths[1]; // art

const avg = (student.exams.midterm + student.exams.final) / 2;
console.log(avg); // 90

//? Array containing Objects:
const shoppingCart = [
  {
    product: 'Jenga Classic',
    price: 6.88,
    quantity: 1
  },
  {
    product: 'Echo Dot',
    price: 29.99,
    quantity: 3
  },
  {
    product: 'Fire Stick',
    price: 39.99,
    quantity: 2
  }
]

//? A little bit of everything...
const game = {
  player1: {
    username: 'Mike',
    playingAs: 'X'
  },
  player2: {
    username: 'Jan',
    playingAs: 'O'
  },
  board: 
  [
    ['0', null, 'X']
    ['X', 'O', 'X'],
    [null, 'O', 'X']
  ]
};

/*
! Array & Object Equality
Since arrays and objects are reference types, neither are storing the actual array, they are storing an address to this information.
* When we compare two reference types, even if they have the same contents, they are stored in seperate places in memory and are therefore NOT the same.
*/
let nums = [1, 2, 3];
let mystery = [1, 2, 3];
console.log(nums === mystery); // false

let moreNums = nums;
console.log(moreNums === nums); // true, pointing to the same place