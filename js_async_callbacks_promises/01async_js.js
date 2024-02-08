//! Asynchronous Code

//! The Call Stack
/*
* The call stack is the mechanism the JS interpreter uses to keep track of its place in a script that calls multiple functions.
* This is how JS 'knows' what function is currently being run and what functions are called from within that function, etc.
? Why a 'stack'? - It's a data structure, visualized by the most recent thing you put in is the first thing that will come out.
* How it works:
  - When a script calls a function, the interpreter adds it to the call stack and then starts carrying out the function.
  - Any functions that are called by that function are added to the call stack further up and run where their calls are reached.
  - When the current function is finished, the intepreter takes it off the stack and resumes execution where it left off in the last code listing.
*/

// The stack starts here and is the first thing checked-off / removed from the stack.
const multiply = (x, y) => x * y;
// Square doesn't function by itself...
const square = (x) => multiply(x, x);
// isRightTriangle doesn't fire immediately, it needs to use other functions to work!
// When it does, it goes through the stack, it'll pop off multiply to run square, then pop off square when it's done with that.
const isRightTriangle = (a, b, c) => {
  return square(a) + square(b) === square(c);
};

isRightTriangle(3, 4, 5);

//! JavaScript is Single-Threaded
/*
* This is a fundamental aspect of JS, meaning that at any given point in time, that single JS thread is running at MOST one line of JS code.
* It can do one thing at a time and that's it.
? This can be a pain if we have a lot of code.
Imagine you want to retrieve all the movies that match the query 'Bat'.
This takes time and can be slow! What happens to our application then? Are we sitting on our hands and waiting? ...maybe! But...
* JavaScript and the browser has some tricks to get around this problem.
*/

console.log("I happen first.");
alert('Hi there!'); // This alert will block the next line of code from operating until it's acknowledged / clicked.
console.log("I happen second");

//! Callbacks
/*
* Yep, callbacks again, this is our workaround for working with JavaScript.
Below, the example works with the timeout function appearing after 3 seconds. We DO see the first and second console logs before it fires.
? Why? The browser does the work for us; it's seperate from JavaScript itself, because they are typically written in C++.
  - Browsers come with Web APIs that are able to handle certain tasks in the background (like making requests or setTimeout)
  - The JavaScript call stack recognizes these Web API functions and passes them off to the browser to take care of.
  - Once the browser finishes those tasks, they return and are pushed onto the stack as a callback.
*/

console.log('I print first!');  // This runs, no problem
setTimeout(() => {    // 'Hey browser, can you set a timer for 3 seconds?' - 'Yep, sure'
  console.log('I print after 3 seconds!');
}, 3000); // This is passed off to the browser to handle, not just JS.
console.log('I print second!'); // This runs because the setTimeout was passed from JS callstack to the browser's responsibility. 'Time's up, remember to run that setTimeout!'