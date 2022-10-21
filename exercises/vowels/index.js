// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

/**
 * 
 * @param {string} str 
 */
function vowels(str) {
  return str.match(/[aeiou]/gi)?.length || 0;
}

module.exports = vowels;

// Solution 1
// function vowels(str) {
//   const vowels = ['a', 'e', 'i', 'o', 'u'];

//   return str.toLowerCase().split('').reduce((totalVowelCount, char) => {
//     if (vowels.includes(char)) totalVowelCount += 1;
//     return totalVowelCount;
//   }, 0);
// }

