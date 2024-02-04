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

/*
! textcontent
* On the surface, this seems identical to innertext but textcontent displays the content, custom spacing, nested elements (even hidden ones), etc.
* Innertext is moreso what is actually displayed on the webpage, a little slower because it has to analyze a bit of what to show and what to hide, and is typically more common.
*/

/*
! innerHTML
* This returns / retrieves not only the text but all other tags inside an element as well.
? We can use this to directly change, add, or destory content set in your markup.
*/
const form = document.querySelector("form");
form.innerHTML; // returns all the elements of said form.
form.innerHTML = "<b>I am a bold tag!</b>"; // This will now appear in our form. Quotes and tags are necessary!

const ul = document.querySelector("ul");
ul.innerHTML; // Shows us everything in the list, including the <li> tags.

const h1 = document.querySelector("h1");
h1.innerText;
h1.innerHTML;
h1.innerHTML += " has something extra added to it!"; // Possible to add to elements like this
h1.innerHTML += "<b>!!!!</b>"; // This will actually add the bolded exclamation marks because innerHTML can interpret the tags.
h1.innerText += "<b>!!!!</b>"; // This will NOT work (unless it's your intention) and will now display the <b> tags in the header as well; they are not interpreted by innerText.

/*
! Values, Links, and Images
 * Now let's look at elements that have properties/values that we can influence directly via JavaScript.
 */

const inputs = document.querySelectorAll('input');
inputs[0].value // "Would display what's set equal to value in the markup."
inputs[0].value = '' // Might be used to reset a form entry after the input contents has been submitted and stored.
inputs[2].checked // false (Assuming we had an unchecked checkbox)

const a = document.querySelector('a');
a.href // Will give us the href value of <a>
a.href = "http://www.google.com" // Element will now navigate you to Google!

const img = document.querySelector('img');
img.src; // Will provide the src, the source, of the image.