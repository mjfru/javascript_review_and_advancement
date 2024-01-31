//! Applying Functions to Data Collections Pt. 2

/*
! Filter
* Creates a new array with all the elements that pass the test implemented by the provided function.
*/
const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];
const odds = nums.filter(n => {
  return n % 2 === 1;
  // This returns will give us true or false.
  // If it returns true, 'n' is added to the filtered, new array.
})
// [9, 7, 5, 3, 1]

const smallNums = nums.filter(n => n < 5);
// [4, 3, 2, 1]

const books = [{
  title: 'Good Omens',
  authors: ['Terry Prachett', 'Neil Gaiman'],
  rating: 4.25,
  genres: ['fiction', 'fantasy']
  },
  {
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42,
    genres: ['fiction', 'graphic novel', 'fantasy']
  },
  {
    title: 'A Gentleman in Moscow',
    authors: ['Amor Towles'],
    rating: 4.36,
    genres: ['fiction', 'historical fiction']
  },
  {
    title: 'Changing My Mind',
    authors: ['Zadie Smith'],
    rating: 3.83,
    genres: ['nonfiction', 'essays']
  },
  {
    title: 'Lord of the Flies',
    authors: ['William Golding'],
    rating: 3.67,
    genres: ['fiction']
  }
]

//! Filter can narrow down a user's search function
const goodBooks = books.filter(book => book.rating > 4.3);
console.log(goodBooks);

const fantasyBooks = books.filter(book => (
  book.genres.includes('fantasy')
));
console.log(fantasyBooks);

const shortForm = books.filter(book => (
  book.genres.includes('short stories') ||
  book.genres.includes('essays')
))
console.log(shortForm);

//? Let's mimic a searchbox:
const query = "LoRd"; // Change the value to play around with this
const results = books.filter(book => {
  const title = book.title.toLowerCase();
  return title.includes(query.toLowerCase())
})

console.log(results);

/*
! Every
* Tests whether all elements in the array pass the provided (test) function. It provides a BOOLEAN value.
*/

const words = ["dog", "dig", "log", "bag", "wag"];
const containsThreeLetters = words.every(word => {
  return word.length === 3;
}) // true

const beginsD = words.every(word => word[0] === 'd') // false

const endsG = words.every(word => {
  let last_letter = word[word.length -1];
  return last_letter === 'g';
}) // true

/*
! Some
* Similar to every, but returns true if ANY of the array elements pass the test function
*/
const newWords = ['dog', 'jello', 'log', 'cupcake', 'bag', 'wag'];

// Any longer than 4 characters?
const longWord = words.some(word => {
  return word.length > 4;
})  // true

// Do any start with 'Z'?
const startZ = words.some(word => word[0] === 'Z'); // false

// Contain 'cake'?
const hasCake = words.some(word => word.includes('cake')) // true

const allGoodBooks = books.every(book => book.rating > 3.5);

const hasTwoAuthors = books.some(book => book.authors.length <= 2)
console.log(hasTwoAuthors);