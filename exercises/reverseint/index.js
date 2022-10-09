// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

/**
 * 
 * @param {number} n 
 */
function reverseInt(n) {
  let reversed = 0, remainder = 0;

  while (n !== 0) {
    // get the last digit
    remainder = n % 10;
    // add the last digit to the reversed number
    reversed = reversed * 10 + remainder;
    // remove the last digit from the original number
    n = parseInt(n / 10);
  }

  return reversed;
}

module.exports = reverseInt;

// Solution 1
// function reverseInt(n) {
//   const reversed = n.toString().split('').reverse().join('');

//   return parseInt(reversed) * Math.sign(n);
// }
