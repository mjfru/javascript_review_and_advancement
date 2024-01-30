//! Arrow Functions
/*
* Arrow functions are syntactically compact altertive to a regular function expression.
? Parentheses are optional if there is only ONE parameter
*/
//? declare name = (parameters) arrow => {function body}
const square = (x) => {
  return x * x;
}

const isEven = num => {
  return num % 2 === 0;
}

const greet = () => {
  console.log("Hi!");
}

const multiply = (x, y) => {
  return x * y;
}

/*
! Implicit Return
* Sometimes, we can trim down arrow functions even more, as we've already seen above, depending on different circumstances.
? An implicit return means that we don't even need to specify a 'return' statement.
*/
const square2 = n => {
  return n * n;     
  // Consists of a single expression that we're returning.
  // In this situation we can use implicit return, the syntax is below
}

// const squareImplicit = n => (
//   n * n
// )
//? It can even be put into a single line if small enough!
// Obviously, if it's a longer function, divide it up.
const squareImplicit = n => n * n
console.log(squareImplicit(5));

//* However, if you have multiple returns or some conditionals...
// const cube = n => (   
    //! This is invalid, you can only return one thing like this
//   if (n < 0) {
//     return false;
//   }
//   n**3;
// )

const nums = [1, 2, 3, 4, 5, 6, 7, 8];

//? Version #1
// const doubles = nums.map(function(n) {
//   return n * 2;
// })

//? Version #2, Arrow Function
// const doubles = nums.map(n => {
//   return n * 2;
// })

//? Version #3, Implicit Return Arrow Function
const doubles = nums.map(n => n * 2);

//? Below are different examples, reduced each time
// const parityList = nums.map(function(n) {
//   if(n % 2 === 0) return 'even';
//   return 'odd';
// })

// const parityList = nums.map((n) => {
//   if (n % 2 === 0) return 'even';
//   return 'odd';
// });
//? With ternary operator
const parityList = nums.map((n) => n % 2 === 0 ? 'even' : 'odd');