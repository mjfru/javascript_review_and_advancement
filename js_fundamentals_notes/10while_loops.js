//! While Loops & 'Other' For Loops

/*
* A while loop continues to run as long as its test condition is true.
It's both simpler to understand and also has simpler syntax.
? Initialized a variable to be your counter (num, i, whatever you want)
? while (some condition is true) { do this thing, likely to make the condition false }
! Use a for loop if you need to generate a set range of numbers (1-10), while loops excels when you don't know how many times it will run.
*/

// let num = 0;
// while (num < 10) {
//   console.log(num);
//   num++;
// }

// let j = 0;
// while(j <= 5) {
//   console.log(j);
//   j++;
// }

const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);
while(guess !== target) {
  console.log(`Target: ${target} Guess: ${guess}`)
  guess = Math.floor(Math.random() * 10);
}
console.log(`Winner winner!! Target: ${target} Guess: ${guess}`)

/*
! The Break Keyword
* The break keyword can exit a while loop (and even in a for loop) before the main condition is met.
*/

//? Uncommon for loop break example:
for (let i = 0; i < 10; i++) {    // Finishes at 5 now...but why even bother with a break?
  console.log(i);
  if (i === 5) {
    break;
  }
}

//? Breaking a while loop from previous example:
while (true) {
  if (target === guess) break;
  console.log(`Target: ${target} Guess: ${guess}`);
  guess = Math.floor(Math.random() * 10);
}
console.log(`Winner winner!! Target: ${target} Guess: ${guess}`)

/*
! For...Of
* A new, nice, and easy way of iterating over arrays (and other iterable objects!)
? Syntax for (variable of iterable) { statement }
*/

//? For...Of Examples:

// The 'normal' for loop:
let subreddits = ['soccer', 'popheads', 'cringe', 'books'];
for(let i = 0; i < subreddits.length; i++) {
  console.log(subreddits[i]);
};

// The for...of loop:
for(let sub of subreddits) {  // the variable can be named anything
  console.log(sub);
};

// With a string...:
for(let char of 'verylongword') {
  console.log(char);
};

const magicSquare = [
  [2, 7, 6],
  [9, 5, 1],
  [4, 3, 8]
];

//? Let's check and verify that every row sums up to 15.
//? With a normal for loop...
// for (let i = 0; i < magicSquare.length; i++) {
//   let row = magicSquare[i];
//   let sum = 0;
//   for(let j = 0; j < row.length; j++) {
//     console.log(row[j]);
//     sum += row[j];
//   }
//   console.log(`${row} summed to ${sum}.`);
// }

//? Now, with a for...of loop:  Much cleaner and easier!
for (let row of magicSquare) {
  let sum = 0;
  for (let num of row) {
    sum += num;
  }
  console.log(`${row} summed to ${sum}.`);
}

//? Here's an example where a for...of is NOT advantageous
// This example loops through the first words list and combines it with the word in the same place in words 2 list. The index is very important and for...of is not helpful in this case.
const words1 = ['mail', 'milk', 'bath', 'black'];
const words2 = ['box', 'shake', 'tub', 'berry'];

//? For Loop, the way to go with this
for (let i = 0; i < words1.length; i++) {
  console.log(words1[i], words2[i])
}

/*
! For...of with Objects
? Remember: Objects aren't iterable...so what can we do?
Let's begin by looping over just the keys.
* We can utilize some special methods: Object.keys(objectName) & Object.values(objeectName)
*/
const movieReviews = {
  Arrival: 9.5,
  Alien: 9,
  Amelie: 8,
  'In Bruges': 9,
  Amadeus: 10,
  'Kill Bill': 8,
  'Little Miss Sunshine': 8.5,
  Coraline: 7.5
};

for (let movie of Object.keys(movieReviews)) {
  console.log(movie, movieReviews[movie]); // Gives us all the movie titles and their rating
}

// Let's find the average score of these movies now too:
const ratings = Object.values(movieReviews);
let total = 0;
for(let r of ratings) {
  total += r;
}
let avg = total / ratings.length;
console.log(avg); 

/*
! For...In Loops
* These iterate over the keys, the properties in an object
* This is very similar to write as a for...of loop:
? for (variable in object) { statement }
*/

const jeopardyWinnings = {
  regularPlay: 2522700,
  watsonChallenge: 300000,
  tournamentofChampions: 500000,
  battleOfTheDecades: 100000
};

let allTotal = 0;
for(let prop in jeopardyWinnings) {
  console.log(prop);  // Gives us the four keys
  console.log(jeopardyWinnings[prop]);
  allTotal += jeopardyWinnings[prop];
}
console.log(`Ken Jennings' total earnings $${allTotal}`);

for (let k in [88, 89, 77, 55]) {
  console.log(k); // Loops over the properties...the indexes
}