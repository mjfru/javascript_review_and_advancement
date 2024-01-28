//! How to Model Data Efficiently Pt. 1

//! Booleans
/*
* Booleans are simply true or false values, we only have those options.
Yes or no, 1 or 0.
? A bonus note, there's no restriction on changing variables to another data type, it isn't a strictly-typed languaged like TypeScript or Java.
*/

let isLoggedIn = true;
let isActive = false;
const gameOver = false;


//! Strings
/*
* Strings are simply pieces of text...-strings- of characters that we wrap in quotes.
You can use either double or single quotes but be consistent!
*/

let message = "Good evening!";
const name = "Matt";
let age = "32";
let quotedMessage = "He said 'Hello!'";

/*
* Strings are indexed and immutable, we cannot change them!
Each string is indexed, starting at 0 for its first letter.
* We can ask for the length of a string by using the .length property, counting everything from spaces and periods to letters.
! The length is always one greater than the last index, length will show us how we'd typically count something. 
*/

let mySong = "Surfin' USA";
mySong.length;  // 11
mySong[0] // "S"
mySong[3] // "f"
mySong[11] // undefined - doesn't exist in this string!
mySong[mySong.length - 1] // "A" - the length (always one greater, minus one, gives us the last index value)


//! String Methods
/*
* Strings come with a set of built-in methods, which are actions that can be performed on or with that particular string.

We can do things like:
  - Search within a string
  - Replacing parts of a string
  - Changing case (upper/lowercase)

* They all follow this format: 
! thing.method()
*/

//? Upper / Lowercase Methods
let msg = "you are just so beautiful!"
msg.toUpperCase();  // YOU ARE JUST SO BEAUTIFUL!
console.log(msg.toUpperCase()) 
msg = msg.toUpperCase(); // Resigns the value of the variable to the uppercase version.

let yelling = "HELLO!!"
yelling = yelling.toLowerCase(); // "hello!"

//? Trim Method - Eliminates only leading and trailing whitespace
let trimExample = "   not right now   ";
console.log(trimExample.trim());  // "not right now"

//* You can also chain methods like so:
trimExample.trim().toUpperCase(); // "NOT RIGHT NOW"

/*
* Some methods accept arguments that modify their behavior; we pass these arguments inside of the parentheses().
? thing.method(argument);
*/

/*
* indexOf - Find where in a string a substring starts / occurs
This method is case sensitive and returns the first instance of the argument.
! If it can't find the substring, it returns -1 as an answer; common to use this if you're making sure something is NOT there.
*/

let tvShow = 'catdog';
tvShow.indexOf('cat'); // 0
tvShow.indexOf('dog'); // 3

"baseball".indexOf("ball") // 4

/*
* slice - Takes 'slices' of an existing string and gives you a piece of it.
If you pass in a single number, it will take a slice starting at that number all the way to the end.
? We can pass in two numbers, where to start and where to end (not inclusive).
*/
"Baseball".slice(4); // ball
"superhero".slice(0,5); // super
'$50.60'.slice(1); // removes the '$', 50.60

/*
* replace - Also does exactly what it sounds like, you specify what you want to replace and what it should be replaced with.
Again, this method will only replace the first instance of the word and will make no changes if it can't find the first argument.
*/
'baseball is entertaining.'.replace('entertaining', 'ok') // baseball is ok


//! String Escapes
/*
? These are combinations of characters that have different meanings within a string.
They aren't too common but they can come in handy and are good to know!
  * \'  - single quote '
  * \"  - double quote "
  * \n  - new line
  * \t  - tab
  * \\   - backslash
*/

console.log("HELLO\nGOODBYE"); 
// HELLO
// GOODBYE

console.log("\\") // \


/*
! String Template Literals
? Template literals are strings that all embedded expressions, which will be evaluated and then turning into a result string.
* To use these, we use - back-ticks `` - NOT single quotes.
Using template literals, we can embed information, variables, equations, etc.
* To do this, we put our logic, variable, etc. inside a dollar-sign $ and curly braces {} that are placed inside of back-ticks ``.
`You owe me ${100 + 200} dollars.`

Prior to String Template Literals, we had to concatenate each string and variable together.
"Welcome, " + username + "!" 
*/

console.log(`I counted ${3 + 4} sheep.`);
let username = "Matt201"
console.log(`Welcome, ${username}!`)

let item = 'cucumbers';
let price = 1.99;
let quantity = 4;
console.log(`You bought ${quantity} ${item}, total price: $${price * quantity}.`);

const minAge = 21;
let patronAge = 19;
console.log(`You must be ${minAge} to enter. Come back in ${minAge - patronAge} years.`)