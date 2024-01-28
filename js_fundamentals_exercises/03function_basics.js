/*
? #3 - A pangram is a sentence that contains every letter of the alphabet.
? Write a function called isPangram, which checks to see if a given sentence contains every letter of the alphabet.
! Make sure you ignore string casing.
isPangram('The five boxing wizards jump quickly) // true
isPangram('The five boxing wizards jump quick) // false
*/

function isPangram(sentence) {
  for (let char of 'abcdefghijklmnopqrstuvwxyz') {
    if(sentence.toLowerCase().indexOf(char) === -1) {
      return false;
    }
  }
  return true;
}

console.log(isPangram('The five boxing wizards jump quickly'));

// Can also write if (sentence.includes(char))...