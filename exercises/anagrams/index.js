// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

/**
 * 
 * @param {string} stringA 
 * @param {string} stringB 
 */
function anagrams(stringA, stringB) {
  const pattern = /[^\w]/g
  stringA = stringA.replace(pattern, "").toLowerCase().split('').sort().join('')
  stringB = stringB.replace(pattern, "").toLowerCase().split('').sort().join('')

  return stringA === stringB;
}

module.exports = anagrams;
