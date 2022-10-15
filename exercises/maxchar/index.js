// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charMap = {};
  let maxChar = '';

  for (let char of str) {
    charMap[char] = (charMap[char] + 1) || 1;

    if (!maxChar || charMap[char] > charMap[maxChar]) {
      maxChar = char;
    }
  }

  return maxChar;
}

module.exports = maxChar;
