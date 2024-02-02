//! Destructuring

/*
* Destructuring is a short, clean syntax to 'unpack' the following:
?   - Values from arrays
?   - Properties from objects
* ...into distinct variables.
*/

/*
! Array Destructuring
* We can unpack specific values of an array into specific variables.
*/

const raceResults = ["Michael", "Alyssa", "Katie"];
const [gold, silver, bronze] = raceResults;
//? Variable names go above...this goes into raceResults and uses the same order and associates them based on their position.
gold; // "Michael"
silver; // "Alyssa"
bronze; // "Katie"

//? Before Destructuring, we might set these variables like so:
// const gold = raceResults[0];
// const silver = raceResults[1]; ...and so on

const [first, , third] = raceResults; // add commas to 'skip' places in the original array
const [fastest, ...everyoneElse] = raceResults; // use the rest operator to group any other array elements
fastest; // 'Michael'
everyoneElse; // 'Alyssa, Katie'

/*
! Object Destructuring
* Remember to use curly brackets {}, match the variable with the key, and the order doesn't matter.
*/
const runner = {
  firstName: "Eliud",
  lastName: "Kipchoge",
  country: "Kenya",
  title: "The Heart of Kenya"
}
const {firstName, lastName, country} = runner;
console.log(firstName); // Eliud

const {country: nation} = runner; // This can rename a key to a new variable, in this case, country becomes nation.
console.log(nation);

// const {firstName, lastName, ...other} = runner; This will store all the 'other' keys

/*
! Nested Destructuring
*/

const results = [{
  first: "Eliud",
  last: "Kipchoge",
  country: "Kenya"
  },
  {
    first: 'Feyisa',
    last: 'Lilesa',
    country: 'Ethiopia'
  },
  {
    first: 'Galen',
    last: 'Rupp',
    country: 'United States'
  }
]

// const [, {country}] = results; This skips the first object and gets the country of the second object (Ethiopia).

/*
! Parameter Destructuring
* We can use the same destructuring to extract / unpack arguments from the values passed in.
'I'm expecting this and I really only care about these parameters for this function'.
*/
const fullName = ({f, l}) => {
  return `${f} ${l}`
}

const competitor = {
  f: "Eliud",
  l: "Kipchoge",
  nationality: "Kenya"
}
console.log(fullName(competitor));  // f - firstName l - lastName // Eliud Kipchoge

const response = [ 'HTTP/1.1', '200 OK', 'application/json' ]

// A function using the status code:
function parseResponse([protocol, statusCode, contentType]) {
  console.log(`Status: ${statusCode}`);
}
parseResponse(response); // Status: 200 OK