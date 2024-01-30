//! Applying Functions to Data Collections Pt. 1

/*
! Array Callback Methods
* Arrays come with many built-in methods that accept super useful callback functions
With callbacks covered in the last section, we can dive deeper into these methods.
? Methods included here include: forEach, map, filter, find, reduce, some, every
? Arrow functions will also be introduced
*/

/*
! forEach
* This method accepts a callback function and calls the function once per element in the array.
? We can use a second parameter as well in the callback function, the index.
*/

const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];
nums.forEach(function(n) {
  console.log(n * n)    // 81, 64, 49...
})

nums.forEach(function(number) {
  if (number % 2 === 0) {
    console.log(number);  // 8, 6, 4, 2
  }
})
//
function printTriple(n) {
  console.log(n * 3);
}

nums.forEach(printTriple); // essentially doing printTriple(9) printTriple(8)...

nums.forEach(function(num, idx) {   //? If we need the index, we can utilize the second parameter
  console.log(idx, num);
})

const books = [{
  title: 'Good Omens',
  authors: ['Terry Prachett', 'Neil Gaiman'],
  rating: 4.25
  },
  {
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42
  },
  {
    title: 'A Gentleman in Moscow',
    authors: ['Amor Towles'],
    rating: 4.36
  }
]
// Let's print each title
books.forEach(function(book) {
  console.log(book.title.toUpperCase());
})

for (let book of books) {
  console.log(book.title.toUpperCase()); // Same result!
}

/*
! Map
* Creates a new array with the results of calling a callback on every element in the array.
*/

//? Examples:
const texts = ['rofl', 'lol', 'omg', 'ttyl'];
const caps = texts.map(function(t) {
  return t.toUpperCase();
});
texts; // ['rofl', 'lol', 'omg', 'ttyl'];
caps; // ["ROFL", "LOL", "OMG", "TTYL"]

const numbers = [20, 21, 22, 23, 24, 25];
const words = ['asap', 'byob', 'rsvp', 'diy'];

const double = numbers.map(function(num) {
  return num * 2;
})

const numDetail = numbers.map(function(n) {
  return {
    value: n,
    isEven: n % 2 === 0
  }
});
console.log(numDetail);

const abbrev = words.map(function(word) {
  return word.toUpperCase().split('').join(".");
  // Make them uppercase, split them apart temporarily into an array, and the (re)join them using a '.'
})
console.log(abbrev);

//? Let's go back to the books array, this time making a new array with only the titles:
const bookTitles = books.map(function(b) {
  return b.title;
})
console.log(bookTitles);

/*
! Find
* Returns the value of the FIRST ELEMENT in the array that satisfies the provided testing function.
? Find is useful when you're trying to find something based on an ID
*/

let movies = [
  "The Fantastic Mr. Fox",
  "Mr. & Mrs. Smith",
  "Mrs. Doubtfire",
  "Mr. Deeds"
]

let movie = movies.find(movie => {
  return movie.includes('Mrs.')
}) // "Mr. & Mrs. Smith"

let movie2 = movies.find(m => m.indexOf('Mrs') === 0); // Mrs. Doubtfire (found at the index of 0)

//? Using the books array of objects above...
const goodBook = books.find(b => b.rating >= 4.3);
console.log(goodBook)

const neilBook = books.find(b => b.authors.includes("Neil Gaiman")
);
console.log(neilBook);