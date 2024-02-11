//! AJAX - Asynchronous JavaScript And XML...or AJAJ (JSON)
/*
? How can we use JavaScript to load API data? Send data to a server?
* We send requests from the client side; requiring Promises and Async functions (because they're not instantaneous).
! In this section, we'll look at the old-school way of using XMLHTTP, the newer, fresher syntax, Fetch, and a library, Axios.
Traditonally, websites send a request to load a new page, the end-server compiles it, sends it (usually as XML), and refreshes to the new page.
These days, with frameworks like React, pages don't reload, requests and responses (usually in JSON these days) happen behind the scenes, and new elements are simply added to the page.
*/

/*
! JSON & XML
? XML - Extensible Markup Language - A way of grouping content and giving meaning to data.
? XML uses markup similar to HTML:
  <name>
    <first>Todd</first>
    <last>Smith</last>
  </name>
  <emai>todd@gmail.com</email>
? XML used to be much more popular and it can still be received from some older servers today.
* Both JSON and XML are ways to send information.

? JSON, JavaScript Object Notation, is extremely common these days.
* It is NOT JavaScript, it's merely a new format/notation for sending data.
* Every key in JSON MUST be a string with quotes but we cannot store complicated things, such as functions.
? When we get JSON back as a reponse, it's very easy to access and pull information out using JavaScript since its notation is so similar to a JavaScript object.
JSON is also not exclusive to be used with JavaScript, you can work with it in Python, Ruby, and other programming languages.
Very simple example:
{
  "person": "Todd"
}
*/

/*
! XMLHttpRequest
* As stated before, this is the 'original' way of sending requests via JavaScript.
? They are objects in the browser that we can use to generate a HTTP request.
However, it does NOT support promises...meaning lots of callbacks for developers.
* Beware: Lots of clunky syntax will make it obvious why it's been mostly phased out.
? To use it...:
*/

// First, make a new object by calling new XML...
const myReq = new XMLHttpRequest();
// And with two callback functions upon success or failure.
// If successful:
myReq.onload = function () {
  const data = JSON.parse(this.responseText);
  console.log(data);
};
// If there's an error
myReq.onerror = function (err) {
  console.log("Error!", err);
};
// What type of request and what url to send it to
myReq.open("get", "https://icanhazdadjoke.com/", true);
myReq.setRequestHeader("Accept", " application/json");
// Finally send the request, triggering either success or failure
myReq.send();

//? Let's send a request to SWAPI, the Star Wars API:
const firstReq = new XMLHttpRequest();
firstReq.addEventListener("load", () => {
  console.log("It worked!");
  console.log(firstReq.responseText); // Can't use 'this' because of arrow function
  //? Let's turn that JSON into workable JavaScript:
  const data = JSON.parse(this.responseText);
  console.log(data);
  // Let's loop over the planets to demonstate:
  for (let planet of data.results) {
    console.log(planet.name);
  }
});
firstReq.addEventListener("error", () => {
  console.log("Error!");
});
firstReq.open("get", "https://swapi.dev/api/planets/");
firstReq.send();
console.log("Request Sent!");

/* 
? How do we access the data we successfully retrieved?
* Since what's returned to us is an object, we can see that it contains a key called 'response' and 'response-text'.
* Therein, we can get the (probable) JSON reponse with all the information we need and use dot notation to get what we need out.
*/

/*
! Chaining XMLHttpRequest(s)
* Using XML gets annoying when we start making requests dependent on one another.
* For example, using the planets demo above, if we want to go deeper and check out the residents of that planet or movies it's appeared in.
*/

const secondReq = new XMLHttpRequest();
firstReq.addEventListener("load", () => {
  console.log("It worked!");
  const filmUrl = data.results[0].films[0];
  const data = JSON.parse(this.responseText);
  //? Chained request starts here...you can see how messy this gets!:
  const filmRequest = new XMLHttpRequest();
  filmRequest.addEventListener('load', function() {
    console.log("Success!");
    const filmData = JSON.parse(this.responseText);
    console.log(filmData);
  })
  filmRequest.addEventListener('error', function(e)  {
    console.log("Error!", e);
  })
  filmRequest.open('GET', filmUrl);
  filmRequest.send();
  // for (let planet of data.results) {
  //   console.log(planet.name);
  // }
});
secondReq.addEventListener("error", () => {
  console.log("Error!");
});
secondReq.open("get", "https://swapi.dev/api/planets/");
secondReq.send();
console.log("Request Sent!");