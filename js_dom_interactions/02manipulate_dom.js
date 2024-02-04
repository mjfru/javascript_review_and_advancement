//! Manipulating the DOM
/*
* We'll be covering the most important parts and methods of DOM manipulation in this (and possibly future) notes.
* These are all used to change, style, add, remove elements from our webpages using JavaScript.
  ? classList     getAttribute()    setAttribute()    appendChild()   append()    prepend()
  ? removeChild() remove()          createElement     innerText       textContent innerHTML
  ? value         parentElement     children          nextSibling     previousSibling style

* Let's start with working with the text of a document, using innerText and textContent.
*/

//! innertext
const h1 = document.querySelector("h1");
h1.innertext; // H1's text here
// .innertext will give us what's contained in the chosen element.
//? We can change what's contained in this h1 tag, for example, right here in JavaScript:
h1.innertext = "I'm reviewing DOM manipulation!";
// Now, it's pretty silly to change something like an h1 tag in JS immediately after the page loads, we'd just change it in the HTML for the same effect but...that's where events will come in later.
document.body.innertext; // Provides ALL the text on the entire webpage.

//! textcontent
/*
* On the surface, this seems identical to innertext but textcontent displays the content, custom spacing, nested elements (even hidden ones), etc.
* Innertext is moreso what is actually displayed on the webpage, a little slower because it has to analyze a bit of what to show and what to hide, and is typically more common.
*/