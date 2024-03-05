// Select our HTML elements using Query Selectors, assign them to usable variables:
const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");
const circle = document.querySelector("circle");

const perimeter = circle.getAttribute("r") * 2 * Math.PI;
circle.setAttribute("stroke-dasharray", perimeter);

let duration;

// Make a new instance of the Timer class, passing in our newly created variables from the DOM.
const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart(totalDuration) {
    duration = totalDuration;
    console.log("Timer started");
  },
  // timeRemaining is coming from timer.js...tick()
  onTick(timeRemaining) {
    circle.setAttribute("stroke-dashoffset", perimeter * timeRemaining / duration - perimeter);
    //? Refactored explanation: At every tick, we're taking the time remaining, the total duration, and the perimeter to figure out what the offset should be.
    // Offsetting by 1 pixel on every tick - needs to be fixed to match up appropriate timing with the circle disappearing.
    // currentOffset = currentOffset - 1;
    // console.log("Ticking down...")
  },
  onComplete() {
    console.log("Timer completed!");
  },
});
