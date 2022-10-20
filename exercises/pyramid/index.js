// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

/**
 * 
 * @param {number} n 
 */
function pyramid(n) {
  const columns = n * 2 - 1;
  let start = n - 1, end = n - 1;

  for (let row = 0; row < n; row++) {
    let level = '';

    for (let column = 0; column < columns; column++) {
      level += column >= start && column <= end ? '#': ' ';
    }

    console.log(level);

    start -= 1;
    end += 1;
  }
}

pyramid(4);

module.exports = pyramid;
