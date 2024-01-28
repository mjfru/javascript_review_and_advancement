/*
? #3 - Write a getCard() function which returns a random playing card object, like:
		{
			value: 'K'
			suit: 'clubs'
		}
Pick a random value from:
----1,2,3,4,5,6,7,8,9,10,J,Q,K,A
Pick a random suit from:
----clubs,spades, hearts, diamonds
Return both in an object
*/

//? Original Version:
// function getCard() {
//   const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
//   const valIndex = Math.floor(Math.random() * values.length);
//   const value = values[valIndex];
  
//   const suits = ['clubs', 'spades', 'hearts', 'diamonds'];
//   const suitsIndex = Math.floor(Math.random() * suits.length);
//   const suit = suits[suitsIndex];
//   return {
//     value: value,
//     suit: suit
//   }
// }
// console.log(getCard());

//? Refactored Version:
function pick(arr) {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

function getCard() {
  const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  
  const suits = ['clubs', 'spades', 'hearts', 'diamonds'];
  return {
    value: pick(values),
    suit: pick(suits)
  }
}

console.log(getCard());