//! Promises
/*
* In the 'callback insanity' demo, we saw how messy, long, and nested our callback functions became...callback hell, if you will!
* Enter Promises: an object / pattern representing the eventual completion or failure of an asynchronus operation!
? Promises are much 'flatter'; not so much nesting, easier on the eyes.
* A promise is a returned object to which you attach callbacks, instead of passing callbacks into a function.

? Promises are made with the following syntax:
  keywords       always 2 parameters, these are functions themselves (can be renamed).
  new Promise = ((resolve, reject) = > {})
*/

//? This is just an example of a Promise's functionality, there's really no element of time here. A promise would be best used in cases of potentially waiting for a result / failure.
// An if / else would work just fine for this otherwise...

// const willGetNewDog = new Promise((resolve, reject) => {
//   const random = Math.random();
//   if (random < 0.5) {
//     resolve();
//   } else {
//     reject();
//   }
// });
// willGetNewDog.then(() => {
//   //? For resolving
//   console.log("We're getting a dog!!");
// });
// willGetNewDog.catch(() => {
//   //? For rejecting
//   console.log("Sadwich. No dog...");
// });

// So how do we interaction with these Promises?
/*
* Every promise has a .then method which runs if the Promise is - resolved -.
* They also have a method called .catch() in case of a Promise - rejection -.
? Now, let's do the same example but with an added element of time involved using the setTimeout() method.
 */

// const willGetNewDog = new Promise((resolve, reject) => {
//* Now, this will take 5 seconds to determine a resolve or reject, simulates making a request and waiting for a response.
//   setTimeout(() => {
//     const random = Math.random();
//     if (random < 0.5) {
//       resolve();
//     } else {
//       reject();
//     }
//   }, 5000);
// });
// willGetNewDog.then(() => {
//   //? For resolving
//   console.log("We're getting a dog!!");
// });
// willGetNewDog.catch(() => {
//   //? For rejecting
//   console.log("Sadwich. No dog...");
// });

//* Promises are often included inside of functions as well. The above, refactored to be a function, would look like this:

const makeDogPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const random = Math.random();
      if (random < 0.5) {
        resolve();
      } else {
        reject();
      }
    }, 5000);
  });
};
makeDogPromise()
  .then(() => {
    console.log("We're getting a dog!");
  }) //? Below, we're chaining the .catch to make it shorter. Mind the semi-colons
  .catch(() => {
    console.log("Sadwich. No dog...");
  });

// makeDogPromise();

/*
! Resolving / Rejecting w/ Values
* Let's make a fake request
*/

const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // const random = Math.random();
      // if (random < 0.3) {
      //   reject({ status: 404 }); // Let's spice things up with typical error codes here
      // } else {
      const pages = {
        "/users": [
          { id: 1, username: "Bilbo" },
          { id: 2, username: "Frodo" },
        ],
        "/about": "This is the about page!",
      };
      //* Instead of randomly checking, let's throw an error if the page isn't there.
      const data = pages[url];
      if (data) {
        resolve({ status: 200, data });
      } else {
        reject({ status: 404 });
      }
    }, 3000);
  });
};

fakeRequest("/users")
  .then((res) => {
    console.log("Status Code", res.status);
    console.log("Data:", res.data);
    console.log("Request Succeeded!");
  })
  .catch((res) => {
    console.log(res.status);
    console.log("Request failed. We'll get them next time.");
  });
