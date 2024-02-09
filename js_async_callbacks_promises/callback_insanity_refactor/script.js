const btn = document.querySelector("button");

const moveX = (element, amount, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const bodyBoundary = document.body.clientWidth;
      const elRight = element.getBoundingClientRect().right;
      const currLeft = element.getBoundingClientRect().left;
      if (elRight + amount > bodyBoundary) {
        reject({ bodyBoundary, elRight, amount });
      } else {
        element.style.transform = `translateX(${currLeft + amount}px)`;
        resolve();
      }
    }, delay);
  });
};

//? Now how to use this?
moveX(btn, 300, 1000)
  .then(() => {
    return moveX(btn, 300, 1000);
  })
  .then(() => {
    return moveX(btn, 300, 1000);
  })
  .then(() => {
    return moveX(btn, 300, 1000);
  })
  //! We can also shorten this up to an implicit return!
  .then(() => moveX(btn, 300, 1000))
  .catch(({ bodyBoundary, elRight, amount }) => {
    console.log(`Body is ${bodyBoundary}px wide`);
    console.log(`Element is at ${elRight}px, ${amount} is too large.`);
  });

// setTimeout(() => {
//   btn.style.transform = `translateX(100px)`;
//   setTimeout(() => {
//     btn.style.transform = `translateX(200px)`;
//     setTimeout(() => {
//       btn.style.transform = `translateX(300px)`;
//       setTimeout(() => {
//         btn.style.transform = `translateX(400px)`;
//         setTimeout(() => {
//           btn.style.transform = `translateX(500px)`;
//         }, 1000)
//       }, 1000)
//     }, 1000);
//   }, 1000);
// }, 1000);

// As a function...
// const moveX = (element, amount, delay, onSuccess, onFailure) => {
//   // Let's add some functionality to check if the button is going to go off the screen.
//   const bodyBoundary = document.body.clientWidth;
//   const elRight = element.getBoundingClientRect().right;
//   const currLeft = element.getBoundingClientRect().left;
//   if (elRight + amount > bodyBoundary) {
//     onFailure();
//     // console.log('Done! - Cannot go further!');
//   } else {
//     setTimeout(() => {
//       element.style.transform = `translateX(${currLeft + amount}px)`;
//       onSuccess();
//     }, delay);
//   }
// };

// Except the initial function call, the entire thing is a single callback!
// moveX(btn, 100, 1000, () => {
//   moveX(btn, 100, 1000, () => {
//     moveX(btn, 100, 1000, () => {
//       moveX(btn, 100, 1000, () => {
//         moveX(btn, 1000, 1000);
//       });
//     });
//   });
// });


// Here's what to do if you can keep moving, here's what to do if you cannot.
//! Big Mess Below, Let's Fix It!
// moveX(
//   btn,
//   300,
//   1000,
//   () => {
//     // Success
//     moveX(
//       btn,
//       300,
//       1000,
//       () => {
//         // success
//         moveX(btn, 300, 1000, () => {
//           console.log("Really, we still have screen left?");
//         }, () => {
//           alert("Cannot move further")
//         })
//       },
//       () => {
//         // fail
//       }
//     );
//   },
//   () => {
//     alert("Cannot move further");
//   }
// );
