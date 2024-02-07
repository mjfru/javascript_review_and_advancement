//! Reminder: these are ways NOT to implement events in your code:
// const btn = document.getElementById("clicker");
// btn.onclick = alert('hi');

// btn.onclick = function () {
//   console.log("You found and clicked me!");
// };

// btn.ondblclick = function () {
//   console.log("Oh-ho! A double click!");
// };

const btn = document.querySelector("#elButton");
// btn.onclick = function() {
//   console.log("You clicked me.")
// };

//? If we add another onclick, we'll overwrite the previous one.
// btn.onclick = function() {
//   console.log("Second click!")
// };

//! EventListeners
//? Remember, no more 'on' syntax with your actions!
btn.addEventListener("click", function () {
  console.log("Clicked!");
});

btn.addEventListener("click", function () {
  console.log("Second event!");
});
// Now, we have two events happening and they're not overwriting each other.

btn.addEventListener("mouseover", function () {
  btn.innerText = "Just kidding!";
});

btn.addEventListener("mouseout", function() {
  btn.innerText = "Click me!";
})

window.addEventListener("scroll", function() {
  console.log("Stop scrolling!");
})