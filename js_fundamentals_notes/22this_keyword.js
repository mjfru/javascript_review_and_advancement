//! 'This' -- The Infamous Keyword
/*
The tricky thing about 'this' is that sometimes the value that it represents seems unpredictable.
There are, however, a set of concrete rules about what 'this' is.
* 'this' is a keyword and it is a reference to the current execution scope, and will return an object to you.
*/

function sayHi() {
  console.log("Hi");
  console.log(this);
}
// sayHi();

const greet = function () {
  console.log(this);
};
greet();
/*
* Running this simple function and displaying 'this' gives us a massive object called 'The Window'.
* This is the global scope in the browser, stealthily looming over us all the time.
! 'this' is a bit of a shapeshifter and what it represents depends on how it was called.
We know how to use the alert("") function but, when we use it, what we're really doing is this:
window.alert("Hi, this is called from the window!");
*/

/*
* When we initialize variables (only with var!), they are also added to the window.
! let & const are not added to the global scope; only var.
*/
var color = "green";
// window.color;

/*
! Using 'this' in Methods
* If we have an object and we add an method to it, 'this' will refer to the object itself, not the global scope (window) in previous examples.
? Using 'this' allows us to reference properties or methods that is aware of other contents in the object.
*/

const person = {
  first: "Robert",
  last: "Gronkowski",
  nickName: "Gronk",
  fullName() {
    //? Since we're using 'this' quite a bit, we can make use of some destructuring:
    const { first, last, nickName } = this;
    // console.log(`${this.first} "${this.nickName}" ${this.last}`);
    return `${first} "${nickName}" ${last}`; // same result as before but now with utilizing destructuring
  },
  printBio() {
    // console.log(this); // this shows us that it's refering the window still
    const fullName = this.fullName();
    console.log(`${fullName} is a retired NFL tight-end.`);
  },
  laugh: () => {
    console.log(this);
    console.log(`${this.nickName} says hahahaha.`);
  },
};

person.fullName();
// Let's change the nickname...
person.nickName = "Yo soy fiesta";
person.fullName();
person.printBio();

/*
! 'This' in Invocation Context
* The value of 'this' depends on the -invocation context- of the function it's used in; it depends on how you call it!
* If there is something to the left, a dot, and then a function, 'this' becomes whatever is set to the left of the dot.
* A standalone function with nothing to its left will be set to the global execution scope (window).
? When we write arrow functions, they do not get their own version of 'this'.
*/

const printBio = person.printBio; // This variable is merely pointing to the function
// printBio(); // Gives an error: 'this.fullName' is not a function.
person.laugh(); //* Here, we can see that this (in the object's method) is set to the window.
