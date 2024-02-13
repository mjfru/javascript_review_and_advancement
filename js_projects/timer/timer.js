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
      this.onStart();
    }
    // Call it manually first to compensate for setInterval waiting 1 second before starting
    this.tick();
    // setInterval(methodToRun, howOften)
    this.interval = setInterval(this.tick, 1000);
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
      this.timeRemaining = this.timeRemaining - 1;
      // Coming from the callback function:
      if (this.onTick) {
        this.onTick();
      }
    }
  };

  // Because of the 'get' keyword, we can treat this like an instance variable!
  // Getters retrieve logic to be used inside of our class(es).
  get timeRemaining() {
    return parseFloat(this.durationInput.value);
  }

  set timeRemaining(time) {
    this.durationInput.value = time;
  }
}