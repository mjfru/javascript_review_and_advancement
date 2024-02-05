//! Altering Styles

/*
* We'll take a look at how to manipulate CSS here to change elements, color them differently, move them, or make them disappear!
* One of the most common ways is utilziing the style property.
! Note: In JavaScript, styles are in - camelCase - for properties that are normally hyphenated in CSS. 
 */

const h1 = document.querySelector("h1");
// Each element contains a styles element with TONS of values.
h1.style.color; // Initialized as an empty string if not given a color in the CSS style.
h1.style.color = "teal"; // Boom, now it's teal.

const p = document.querySelector("p");
p.style.color = "orangered"; // The first <p> tag's content is now orangered.
p.style.backgroundColor = "black"; // The back of the first <p> tag is now black.

const allLis = document.querySelectorAll("li");
const colors = ["red", "orange", "yellow", "green", "blue", "purple"];

allLis.forEach((li, index) => {
  const color = colors[index];
  li.style.color = color;
  // console.log(li, color);
});

/*
! Computed Styles
* When we access values using the DOM, the styles reflected therein are reflective of only in-line, uncommon styles, not the CSS sheet that is likely linked to your webpage.
? Enter getComputedStyle().
* This displays the default styles of an element as well as from the CSS style sheet.
*/

const styles = getComputedStyle("li");
//! This returns a large CSS declaration with TONS of stuff.

const h1 = document.querySelector("h1");
const compStyles = getComputedStyle(h1); // The variable we just saved with querySelector

/*
! Manipulating Classes
* For adding multiple styles to an element...
? Let's imagine we're making a To-Do List with 3 tasks and corresponding buttons to cross them off.
*/

const todo = document.querySelector("#todos .todo"); // Selecting the first todo class inside the todos id.
todo.style.color = "gray";
todo.style.textDecoration = "line-through";
todo.style.opacity = "50%";
//? This is NOT the ideal way to this, imagine all the lines we'd have to type.
//! The best way to do this is by declaring a CSS class.
/*
? CSS class in style sheet
.done {
  color: grey;
  text-decoration: line-through;
  opacity: 50%;
}
* To apply it...
*/
todo.setAttribute("class", "done"); // This overwrite the class though, leading to some potential conflicts. ('class', 'todo done') is possible but not ideal.
//* Enter: classList, providing us more methods for juggling classes, adding, removing, combining, etc.
todo.classList.remove("done");
todo.classList.add("done");
todo.classList.toggle("done"); //! Most useful, adds it if it's not there, removes if it is there.

/*
! Creating Elements with the DOM
* Make an element using the method createElement(); with the type of element you'd like to create passed in.
This makes an empty tag representation.
* Putting content inside this is a seperate step; newElement.innerText = "Your text".
? But how do we get this onto the actual page? We created it, it exists but isn't represented in our HTML yet.
* Select an element to apprend it to using...more methods!
! appendChild() - Call this on a parent element to add a child element.
*/

const newh2 = document.createElement("h2");
console.dir(newh2); // Shows us we created an object.
newh2.innerText = "I like things!";
newh2.classList.add(".special"); // Adds a class to this newly made element

//? Adding to the HTML...
const section = document.querySelector("section");
section.appendChild(newh2); // Adding the new element we just made.

const newImg = document.createElement("img"); // No innerHTML here, no opening or closing tag!
newImg.src = "https://www.bigurlhere.edu/img";
newImg.style.width = "300px"; // Doing a little inline styling...
document.body.appendChild(newImg);

const newLink = document.createElement("a");
newLink.innerText = "Go to Youtube"; // What the link will display as
newLink.href = "https://www.youtube.com";
const firstP = document.querySelector("p");
firstP.appendChild(newLink); // Adding the link to the first paragraph.

/*
! Append, Prepend, and insertBefore
We've seen appendChild before where we can add to a parent element but we don't have much control over where it goes.
* For creater control, we have the insertBefore() method.
* The syntax is a little confusing, for example: 
*/

const firstLi = document.querySelector("li.todo");
parentUl.insertBefore(newLi, firstLi);
// Parent of what you're inserting into(what you're inserting and what it's coming before)

/*
* There is also a method called insertAdjacentElement that takes a position in the form of string ('beforebegin', 'afterend', for example) and the element you're inserting there. 
Check it out for examples on MDN.
! Append
* With .append, you can insert multiple elements at once into a target.
* .prepend also automatically sticks something to the beginning of a parent element.
*/

firstP.append(italicElement, newLi);

/*
! Remove & RemoveChild
* Both do what they sound like and follow the patern set by appendChild.
* Remove is very simple and does not need a parent node!
*/

const ul = document.querySelector('section ul');  // Parent element
const removeMe = ul.querySelector('.special') // Look in the ul variable for a class called 'special'.
ul.removeChild(removeMe); // Parent.removeChild(childToBeRemoved); Can be saved in a variable.

const h1 = document.querySelector('h1');
h1.remove(); // That's it!
