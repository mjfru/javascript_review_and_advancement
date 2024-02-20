// Timer Class:
class Timer {
  // The fourth parameter, callbacks, is optional
  constructor(durationInput, startButton, pauseButton, callbacks) {
    // Assign these to instance variables so we can refer to these from other methods inside of this class.
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;
    // If callbacks were provided...
    if (callbacks) {
      // Save a reference to the callback that was thrown in here
      this.onStart = callbacks.onStart;
      this.onTick = callbacks.onTick;
      this.onComplete = callbacks.onComplete;
    }

    // Add an event listener for the button, listen for a click, run the start method.
    this.startButton.addEventListener("click", this.start);
    this.pauseButton.addEventListener("click", this.pause);
  }

  // Purpose: Signal to start the 'tick' method and call it as needed
  start = () => {
    // If we do indeed have an onStart callback...
    if (this.onStart) {
      this.onStart(this.timeRemaining);
    }
    // Call it manually first to compensate for setInterval waiting 1 second before starting
    this.tick();
    // setInterval(methodToRun, howOften)
    this.interval = setInterval(this.tick, 10);
    // Reduce the time to help make the animation smoother.
  };
  // How do we get the timer into this method too? - Assign an instance variable! this.
  pause = () => {
    clearInterval(this.interval);
  };

  tick = () => {
    // We're going to store the current time inside of the input element
    // Right now, it's stored as a string (value="30"), so we need to make it an integer
    // Using parseFloat instead of parseInt because this timer will eventually support decimal values.
    // const timeRemaining = this.timeRemaining;
    // this.timeRemaining = timeRemaining - 1;
    //? Refactored: We're calling the 'getter' to retrieve the initial value (from the duration input)
    //? And we're calling the setter (left) whenever we want to update that value.
    //* This hides away all the of complexity and makes code easier to read.
    if (this.timeRemaining <= 0) {
      this.pause();
      if (this.onComplete) {
        this.onComplete();
      }
    } else {
      // -.05 matches the interval it's set to above
      this.timeRemaining = this.timeRemaining - 0.01;
      // Coming from the callback function:
      if (this.onTick) {
        // Now, in our other JS file, onTick() is going to receive timeRemaining
        this.onTick(this.timeRemaining);
      }
    }
  };

  // Because of the 'get' keyword, we can treat this like an instance variable!
  // Getters retrieve logic to be used inside of our class(es).
  get timeRemaining() {
    return parseFloat(this.durationInput.value);
  }

  set timeRemaining(time) {
    // .toFixed(2) rounds the decimal to just 2 decimal places
    this.durationInput.value = time.toFixed(2);
  }
}

const bodyElement = document.body;

const backgroundSetter = document.querySelector("#background-setter");

backgroundSetter.addEventListener("input", () => {
  bodyElement.style.backgroundColor = backgroundSetter.value;
});
