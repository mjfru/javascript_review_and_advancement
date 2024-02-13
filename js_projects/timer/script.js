// Select our HTML elements using Query Selectors, assign them to usable variables:
const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");
const circle = document.querySelector('circle');

const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);

let currentOffset = 0;

// Make a new instance of the Timer class, passing in our newly created variables from the DOM.
const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart() {
    console.log("Timer started")
  },
  onTick() {
    circle.setAttribute('stroke-dashoffset', currentOffset)
    currentOffset = currentOffset - 50;
    // console.log("Ticking down...")
  },
  onComplete() {
    console.log("Timer completed!")
  }
});
