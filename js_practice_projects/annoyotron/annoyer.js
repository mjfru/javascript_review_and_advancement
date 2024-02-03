const annoyer = {
  // key: value
  phrases: [
    "literally",
    "cray cray",
    "I can't even",
    "Totes!",
    "YOLO!",
    "Can't stop, won't stop!",
    "My hubby said...",
  ],
  pickPhrase() {
    const { phrases } = this;
    const index = Math.floor(Math.random() * phrases.length);
    return phrases[index];
  },
  start() {
    this.timerId = setInterval(() => {
      // Assigning this to a variable gives us a timerId (in the window) to clear/stop it later
      console.log(this.pickPhrase());
      //? Using an arrow function here to avoid scoping issues with 'this'; good to use in nested functions
    }, 3000);
  },
  stop() {
    clearInterval(this.timerId);
    console.log("Phew, thank goodness that's over!")
  }
};

console.log(annoyer.start());
// annoyer.stop();

// Let's use setInterval which is a default method in the window
// setInterval(func, 3000);
// clearInterval(id)
