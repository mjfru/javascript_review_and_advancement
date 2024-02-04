//! The D.O.M. - Document Object Model
/*
* The DOM is a JavaScript representation of a webpage and functions as your JS window into the contents of it.
Boiled down, it's just a bunch of objects that you can interact with via JavaScript!
! Perhaps the most important part of all of this is in the title; it's an OBJECT model.
When your browser boots up a webpage, it looks at the HTML and CSS and turns it into a JavaScript object!
This lets us interact with HTML and CSS elements through JS.
*/

/*
! The Document of the DOM
* This is just a representation of a webpage that is made into an object, represented with a tree structure.
It contains representations of all the content on a page, plus tons of useful methods and properties.
? In every tree, there is a root...which is actually the top; in this context, it's our document and it is in every single browser window.
console.dir(document) will show us the underlying object and all its keys and values!
* Therefore, we'll be using document. quite a bit since we're interacting with this big object.
*/

/*
! Methods for Selecting & Manipulating - getElementById
* document.getElementById - finds and returns the element containing the specified id.
*/

document.getElementById("main-img");
const mainImg = document.getElementById("main-img");

/*
! Methods for Selecting & Manipulating - getElementsByTagName
* Does exactly what it says and is useful for selecting all a type of element on a page...<p> tags, <h1> tags, etc.
Remember to include the 's' in element-s-!
? If we look at things selected this way in the console, we'll find it returns to us an HTML collection...despite it looking like an array.
* While these aren't arrays, we can still do some array 'logic' on them.
    - inputs[0] - returns your first input, for example
    - Iteration and spreading is still possible but not most array methods.
*/

document.getElementsByTagName("input"); // selects all inputs on the page
document.getElementsByTagName("p"); // selects all <p> tags on the page
const arr = [...inputs]; // we can turn these HTML collections into arrays if needed like so.

/*
! Methods for Selecting & Manipulating - getElementsByClassName
* Since lots of classes are used in our markup, this becomes very useful for selecting similarly classed elements.
* Only classes are valid here, not element types, not ids.
? If you want to be more specific, say perhaps different elements have the same class and you only want one thing, you can save elements in a variable and the go deeper.
*/

document.getElementsByClassName("header"); // returns anything with this class in an HTML collection
document.getElementsByClassName("special");
const ul = document.getElementsByTagName("special");
ul.getElementsByClassName("special"); // Now is selecting only elements with the class of special inside the specified ul variable.


/*
! And one to rule them all...querySelector!
* This is a newer, all-in-one method to select a - single element -.
* To use it, simply pass in a CSS selector!
This can replicate the selectors of all of the above selector methods.
* Additionally, querySelectorAll returns a collection (a node list this time) of items, not just the first result.
? A small note, querySelector is not as optimized as the old selectors but doesn't make a difference in small-medium sized projects.
*/

document.querySelector('h1');
document.querySelector('#red');
document.querySelector('.big');
document.querySelectorAll('input[type="text"]');
document.querySelectorAll('.special');
