//! Rest - New-ish JavaScript Features Pt.2!

/*
* Rest uses the same three dot (...) syntax as Spread, but instead of spreading data out into arguments, arrays, etc., Rest collects things down into a single array.

! The Old Way - The Arguments Object
* The arguments object is available inside every function.
* While it's an array-like object and does have a length property, it does NOT have array methods like push/pop.
* It contains all the arguments passed to the function.
! Not available inside of arrow functions!
*/

//? Example of the Arguments Object
Math.max(1,5,6,7) // How would we write code to return a sum for any number of numbers.

function sum() {
  const argsArr = [...arguments]
  return argsArr.reduce((total, currVal) => {
    return total + currVal;
  })
};

sum(1, 2, 3)  // { '0': 1, '1': 2, '2': 3 }

function fullName(first, last) {
  console.log(arguments);
}

const multiply = () => {
  console.log(arguments) // Will not work!
}

/*
! Back to Modern Times - Let's use Rest instead
* This collects all remaining arguments into an actual array.
* Now, we can use this feature in our also new arrow functions.
*/

function sumAll(...nums) {
  let total = 0;
  for (let n of nums) total += n;
  return total;
}

function displayFullName(first, last, ...titles) {  //! Order matters!
  console.log('first', first)
  console.log('last', last)
  console.log('titles', titles)
}

displayFullName('Tom', 'Jones', 'III', 'of the Shire');

const multiplyV2 = (...nums) => (
  nums.reduce((total, currVal) => total * currVal)
)

console.log(multiplyV2(2, 3, 4)); // 24