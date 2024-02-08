const form = document.querySelector("#signup-form");

const creditCard = document.querySelector("#cc");
const termsCheckbox = document.querySelector("#terms");
const veggie = document.querySelector("#veggie");

const formData = {};
for (let input of [creditCard, termsCheckbox, veggie]) {
  //? The only thing we care about in the event is the target, so let's destructure it...
  input.addEventListener("input", ({ target }) => {
    //? Grabbing just these values to use easily from our target
    const { name, type, value, checked } = target;
    // console.log(e.target.name);
    //? Adding the name of the field as a key and having it hold the value
    // formData[e.target.name] = e.target.value;
    //? After destructuring and to check what type of input we're looking at...
    formData[name] = type === 'checkbox' ? checked : value;
    console.log(formData);
  });
}

//? Allows us to see what was submitted but only after the user has hit the 'Submit' button
// form.addEventListener("submit", function (e) {
//   alert("Submitted!");
//   console.log("cc", creditCard.value);
//   console.log("terms", termsCheckbox.checked);
//   console.log("veggie", veggie.value);
//   e.preventDefault();
// });

// Let's extract the data from the form and do something with it (the console logs)

// Instead of waiting for someone to hit the submit button to have access to the data, we can view it "live" as it's happening.

//? Now, every time something in the credit card, veggie, or terms field changes, we get this message in our console.
// creditCard.addEventListener("input", (e) => {
//   console.log("CC Number Changed", e);
//   formData["cc"] = e.target.value;
// });

// veggie.addEventListener("input", (e) => {
//   console.log("Veggie Changed!", e);
//   formData["veggie"] = e.target.value;
// });

// termsCheckbox.addEventListener("input", (e) => {
//   console.log("Checkbox", e);
//   formData['agreeToTerms'] = e.target.checked;
// });

//* After adding a name attribute to all our HTML inputs, we can loop over all 3 of our inputs.
