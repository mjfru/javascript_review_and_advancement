//! Async Functions
/*
* At their core, Async functions are just some nice syntactical sugar for using Promises.
Let's say we have a regular old function that uses Axios to get a URL (and remember, this does not work!).
*/

// function getData() {
//   const data = axios.get("https://swapi.dev/api/planets/");
//   console.log(data);
// }

/* 
This will result in giving us a Promise and status in our console.
? Wouldn't it be nice to just write this and pretend as if JavaScript was asynchronous?
But alas, we have to do something like this and include .then()...:
*/

function getData() {
  const data = axios.get("https://swapi.dev/api/planets").then((data) => {
    console.log(data); // This will be the actual data we want, printed second.
  });
  console.log(data); // We'll see this first, printing out a promise
}

/*
It would be nice if we didn't have to worry about .then and promises!
* Enter async and await and the magic it contains!
*/

/*
! The Async Keyword
* Async functions always return a promise.
* If the function returns a value, the promise will be resolved with that value.
* If the function throws an exception, the promise will be rejected.
*/

async function hello() {
  return "Hey guy!";
}
hello(); // Promise {<resolved>: "Hey guy!"}
async function uhOh() {
  throw new Error("Oh no! Error!");
}
uhOh(); // Promise {<rejected>: Error: 'Oh no! Error!'}

// function greet() {
//   return "Hello."; // Simply returns the string 'Hello.'
// }

async function greet() {
  return "Hello."; //! Returns a resolved promise: 'Hello.'
} //? Whatever is returned here is what the promise will resolve with.

greet().then((val) => {
  console.log("Promise resolved with: ", val);
});

async function add(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw "X and Y must be numbers!"; //! A rejected promise if numbers are not...numbers!
  }
  return x + y; //! A Resolved Promise with the Sum.
}

findSum("e", "r")
  .then((val) => {
    console.log("Promise Resolved with: ", val);
  })
  .catch((err) => {
    console.log("Promise rejected with: ", err);
  });

// The above function without Async...
function findSum(x, y) {
  return new Promise((resolve, reject) => {
    if (typeof x !== "number" || typeof y !== "number") {
      reject("X and Y must be numbers!");
    }
    resolve(x + y);
  });
}

/*
! The Await Keyword
* While async is a way to declare an asynchronous function, a fancy way of wrapping a function in a promise, the await keyword PAUSES the execution of the function while it waits for a promise to be resolved.
* We can run code AFTER an async operation without having to nest any callbacks.
? We can only use the await keyword inside of function declared with async, however!
*/

//? Below is fine and dandy, but there's an easier, more modern way...
// function getPlanets()  {
//   axios.get('https://swapi.dev/api/planets/');
// }

// getPlanets().then((res) => {
//   console.log(res.data);
// });

/*
 * Normally, without await, we'll get an error because it's an unresolved promise that it's returning.
 * Now, with await, JS will wait for the promise to be resolved and the value it's resolved with will be stored in a variable...which we also now have access to.
 */
async function getPlanets() {
  const res = await axios.get("https://swapi.dev/api/planets/");
  console.log(res.data);
  // Runs once the previous line is complete (the Axios promise is resolved)
}

getPlanets();

/*
! Error Handling in Async Functions
* What if the promises in async functions are not resolved and are instead rejected?
? We have some options, such as adding on a .catch() to our function call:
  getPlanets().catch((err) => {
    console.log('In catch!);
    console.log(err);
  })
* Or, we can do what's called a try / catch block!
* Basically that means try to do this and if it's successful, great! If not, do this instead.
*/

async function getPlanets2() {
  try {
    const res = await axios.get("https://swapi.dev/api/planets/");
    console.log(res.data);
  } catch (e) {
    console.log("In catch!", e);
  }
}
getPlanets2();