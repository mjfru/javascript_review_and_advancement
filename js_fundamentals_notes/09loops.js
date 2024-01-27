//! Loops
/*
* Loops are all about doing things repeatedly, like summing up all the numbers in an array.
? Types of loops in JavaScript include:
  - for loop
  - while loop
  - for...of loop
  - for...in loop
*/

/*
! For Loops
* The setup for for loops is similar to conditional statements.
* This is the typical syntax for For loops and includes 3 seperate necessities:
*     for (initialValue; condition; incrementExpression) { actionToDo }
*/

//? Examples:
for (let i = 1; i <= 10; i++) {
  //? begin at 1, while this is true, increment by this each time
  console.log('Hello', i); // Prints Hello 1-10
}

for (let i = 1; i < 21; i++) {
  console.log(`${i} x ${i} = ${i * i}`);
}

for (let i = 50; i >= 0; i-=10) {
  console.log(`${i} - 10 = ${i - 10}`);
}

for(let i = 200; i >= 0; i-=25) {
  console.log(i);
}

/*
! Beware: Infinite Loops
? Infinite loops occur when the end condition will never be met...if the second part of your for loop would ALWAYS be true.
*/

//? Infinite Loop Example:
//* i starts at 20...it will ALWAYS be larger than 0, especially if we increment it by 1!
// for (let i = 20; i >= 0; i++) {
//   console.log("You'll have a bad time if you un-comment this and run it!")
// }

/*
! For Loops & Arrays
* To loop over an array, start at 0 and continue to the last index (length-1)
*/

const animals = ['lions', 'tigers', 'bears'];
for (let i = 0; i < animals.length; i++) {
  console.log(i, animals[i]);
}

const examScores = [98, 77, 84, 91, 57, 66];
for (let i = 0; i < examScores.length; i++) {
  console.log(i, examScores[i]);
}

const employees = [
  {
    firstName: 'Jim',
    grade: 100
  },
  {
    firstName: 'Scott',
    grade: 84
  },
  {
    firstName: 'Matt',
    grade: 95
  },
  {
    firstName: 'Austin',
    grade: 99
  }
];

for (let i = 0; i < employees.length; i++) {
  let employee = employees[i];
  console.log(`${employee.firstName} scored ${employee.grade}.`)
}

let avgScore = 0;
for (let i = 0; i < employees.length; i++) {
  let employee = employees[i];
  avgScore += employee.grade;
}
console.log("This is the Average Score!!!!!", avgScore/employees.length);

const word = 'anxiety';
let reversedWord = "";
for (let i = word.length-1; i >= 0; i--) {
  reversedWord += word[i];
  // console.log(word[i]);
  // console.log(reversedWord);
}
console.log(reversedWord);

/*
! Nested For Loops
* We can nest loops within other loops and it can be confusing.
It's common sense and common convention to let your starter variable be something different than your initial, outer loop.
*/

//? Examples:
for (let i = 1; i <= 10; i++) {
  console.log('Outer Loop', i);       //? Every iteration, it will trigger the nested loop
  for(let j = 10; j >= 0; j-=2) {     //? This loop runs every time the loop above cycles
    console.log('    Inner Loop', j); //? When this finishes, the outer loop runs again
  }
}

const gameBoard = [
  [4, 32, 8, 4],
  [64, 8, 32, 2],
  [8, 32, 16, 4],
  [2, 8, 4, 2]
];

let totalScore = 0;
for (let i = 0; i < gameBoard.length; i++) {  // loop over the outer array
  console.log(gameBoard[i]);  // essentially prints the gameboard in the console
  let row = gameBoard[i]; // one row of the gameboard
  for(let j = 0; j < row.length; j++) {
    console.log(row[j]);  // Shows every value in a row
    totalScore += row[j];
  }
  console.log(totalScore);
}