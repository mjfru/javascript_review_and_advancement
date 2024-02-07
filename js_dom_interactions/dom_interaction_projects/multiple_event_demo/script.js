const colors = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "purple",
  "indigo",
  "violet",
];

const h1 = document.querySelector("h1");

const changeColor = function () {
  h1.style.color = this.style.backgroundColor;
  console.log(this); // Will display the div we clicked on
  console.log(this.style.backgroundColor); // Will display the background color of the clicked div
};

const container = document.querySelector("#boxes");

for (let color of colors) {
  const box = document.createElement("div");
  box.style.backgroundColor = color;
  box.classList.add("box");
  container.appendChild(box);
  // Since this is in a loop, it'll apply to as many boxes as we make
  box.addEventListener("click", changeColor);
}

// document.body.addEventListener('keypress', function(e) {
//   console.log(e);
// })


const input = document.querySelector('#username');

// We want to pass in the 'e' because we will want to know what key was pressed
//? Key down means a key has been pressed...down. Nothing to do with directionals!
input.addEventListener('keydown', function(e) {
  console.log('Key Down!')
})

// This is for when the key bounces back up / releases
input.addEventListener('keyup', function(e) {
  console.log('Key Up!')
})

// This accepts only 'visible' inputs...letters, spaces, numbers, etc.
// Shift, tab, caps lock, etc. will not trigger it.
input.addEventListener('keypress', function(e) {
  console.log('Key Press');
})


//! Real World Example - Shopping List:
const addItemInput = document.querySelector("#addItem");
const itemsUl = document.querySelector("#items");

addItemInput.addEventListener('keypress', function(e) {
  if(e.key === 'Enter'){
    if(!this.value) return;
    // Add item to list
    const newItemText = this.value;
    const newItem = document.createElement('li');
    newItem.innerText = newItemText;
    itemsUl.appendChild(newItem);
    this.value = '';
  }
  // console.log(e);
})