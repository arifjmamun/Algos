// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

/**
 * 
 * @param {string} str 
 */
function reverse(str) {
  return str.split('').reduce((reversed, char) => char + reversed, '');
}

module.exports = reverse;


// Solution 1
// function reverse(str) {
//   return str.split('').reverse().join('');
// }

// Solution 2
// function reverse(str) {
//   let reversed = '';

//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }

//   return reversed;
// }

// Solution 3
// function reverse(str) {
//   let reversed = '';

//   for (const char of str) {
//     reversed = char + reversed;
//   }

//   return reversed;
// }