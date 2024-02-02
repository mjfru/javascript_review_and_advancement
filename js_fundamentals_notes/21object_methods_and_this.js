//! Object Methods (Part 2!)
/*
* This section (and probably the next) will cover:
?     - Using new object shorthand syntax
?     - Adding methods to objects
?     - Using computed properties
?     - Understand prototypes
?     - Try to understand how 'this' (the keyword) works
*/

/*
! Shorthand Properties
* A new addition to JS, an easy way to create an object literal when you have variables.
? The key name will be the variable name and the value is the value of the variable.
*/

//? The Old Way Example:
// const getStats = (arr) => {
//   const max = Math.max(...arr);
//   const min = Math.min(...arr);
//   const sum = arr.reduce((sum, r) => sum + r);
//   const avg = sum / arr.length;
//   return {
//     max: max,
//     min: min,
//     sum: sum,
//     avg: avg
//   }
// }

const reviews = [4.5, 5.0, 3.44, 2.8, 3.5, 4.0, 3.5];

//? The New Way
const getStats = (arr) => {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const sum = arr.reduce((sum, r) => sum + r);
  const avg = sum / arr.length;
  return {    //* This creates a key named max and contains the value.
    max,
    min,
    sum,
    avg
  }
}

const stats = getStats(reviews);
console.log(stats);

/*
! Computed Properties
* An improvement for the object literal syntax that allows us to use dynamic keys.
*/

const role = 'host';
const person = 'Annie Mac';
const role2 = 'director';
const person2 = 'James Cameron';

// const team = {
//   role: person
    //? Right now, this gives us role: 'Annie Mac' but JS isn't checking if 'role' should also be computed.
// }

//? In the past, this would be fixed by doing this after initializing the object:
// team[role] = person;
// team[role2] = person2;

//? Now, the NEW way (use square [] brackets around your key!:
const team = {
  [role]: person,
  [role2]: person2
}
console.log(team);

// Let's make a function that takes an object as an argument and returns a copy of it back with a new property added in.
// const addProp = (obj, key, value) => {
//   const copy = {...obj} // Using spread to make a copy
//   copy[key] = value;
//   return copy;
// }

//? Let's rewrite that with computed properties instead:
const addProp = (obj, key, value) => {
  return {...obj, [key]: value};
}

const result = addProp(team, "happy", ":)");
console.log(result);

/*
! Methods and Adding them to Objects
* We can add functions as properties on objects; they're called methods!
? This is especially useful for grouping similar functions together.
*/

const math = {
  multiply: function(x, y) {
    return x * y;
  },
  divide: function(x, y) {
    return x / y;
  },
  square: function(x) {
    return x * x;
  } 
};

// It is possible to define functions before placing them in an object (simply 'add', for example).
//* We now access these methods with dot notation:
console.log(math.square(7)); // 49

/*
! Method Syntax Shorthand
*/

const mathematics = {
  blah: 'Hi!',      // Give it a name, the key and what it will return!
  add(x, y) {
    return x + y;
  },
  multiply(x, y) {
    return x * y;
  }
}

console.log(mathematics.add(50, 60)); // 110
console.log(mathematics.blah); // Hi!

const auth = {
  username: "TommyBot",
  login() {
    console.log("Logged you in!");
  },
  logout() {
    console.log("Goodbye!");
  }
};

auth.login();