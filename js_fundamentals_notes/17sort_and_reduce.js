//! Sort (again) and Reduce
/*
! Sort
* We pass in a 'compare' function that has two parameters.
* We then need to compare a value.
?   If compareFunc(a, b) returns LESS than 0 -> Sort a before b
?   If compareFunc(a, b) returns 0 -> Leave a and b unchanged with respect to each other
?   If compareFunc(a, b) returns GREATER than 0 -> Sort b before a
*/

const prices = [400.50, 3000, 99.99, 35.99, 12.00];
prices.sort(); // Default behavior, remember, is to conver them to strings and THEN sort them.

const ascSort = prices.sort((a, b) => a - b);
console.log(ascSort);   //! Sorts by Ascending Order
/*
Above, a is 400.5 and b is 3000.
It returns a - b, 400.5 - 3000, which gives us a negative number.
If we look at the explanations above, this means it will sort a before b, ascending.
*/
const descSort = prices.sort((a, b) => b - a);
console.log(descSort);
/*
This is the opposite of the previous example and will sort in descending order.
(3000 - 400.50) -> Greater than 0 -> Sort B before A/
*/
// const badSort = prices.slice().prices.sort(); // Based on sorting by strings, creates a new array because of .slice()

//? Let's revist our books example:
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
  }
];

// Have to do a bit extra since each element is an object...
const ascBooks = books.sort((a, b) => a.rating - b.rating);
const descBooks = books.sort((a, b) => b.rating - a.rating);

/*
! Reduce
* Reduce executres a reducer function on each element of the array, resulting in a - single value -.
? We can use this for things like summing all the elements in an array, finding the maximum value of an array, tallying votes/data, etc.
* To use this, we have to follow some proper syntax.
We pass in a callback function that needs to follow a particular format with at least two parameters.
*/

[3, 5, 7, 9, 11].reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}); // 35

/*
* Callback    accumulator     currentValue    returnValue
first call        3               5               8
second call       8               7               15
third call        15              9               24
fourth call       24              11              35
*/

/* 
? The accumulator (or total) is the variable that will store the end result of reduce.
? currentValue represents each individual element in the array as reduce works its way through it.
Above, the accumulator starts at the first value of the array, 3.
The currentValue starts at the second value, 5.
It then adds them together to give us 8 and repeats the process until the function finishes.
*/

const nums = [3, 4, 5, 6, 7];
const product = nums.reduce((total, currentValue) => {
  return total * currentValue;
})
console.log(product); // 2,520

/*
! Reduce Continued
* Let's look at some other examples, like tracking a max value.
*/

const grades = [87, 64, 96, 92, 88, 99, 73, 70, 74];
const maxGrade = grades.reduce((max, currentValue) => {
  if (currentValue > max) return currentValue;
  return max;
});
console.log(maxGrade);
/*
* max     currentValue    return
  87          64            87
  87          96            96
  96          92            96...(and eventually 99 when it gets there)

*/
const maxGrade2 = grades.reduce((max, currentValue) => {
  return Math.max(max, currentValue);
});
console.log(maxGrade2); // Same result

/*
! Reduced Continued Yet Again!
! Tallying
*/
const votes = ['y', 'y', 'n', 'y', 'n', 'y', 'n', 'y', 'n', 'n', 'n', 'absent', 'y', 'y'];

const results = votes.reduce((tally, val) => {
  if (tally[val]) {   // if the value has already been counted once, add one to it
    tally[val]++
  } else {
    tally[val] = 1;   // if it's the first instance of this vote, set it equal to 1.
  }
  return tally;
}, {})
console.log(results);
// {}
// {y:1}
// {y:2}
// {y:2, n:1}

//? A shorter way:
const results2 = votes.reduce((tally, val) => {
  tally[val] = (tally[val] || 0) + 1;
  return tally;
}, {});
console.log(results2);

//? Group books by rating:
const groupedByRatings = books.reduce((groupedBooks, book) => {
  const key = Math.floor(book.rating);
  if (!groupedBooks[key]) groupedBooks[key] = []; // if there's no book with this rating, make a new array
  groupedBooks[key].push(book); // then push the whole book to that array
  return groupedBooks;
}, {})

console.log(groupedByRatings);