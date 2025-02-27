// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

/**
 * 
 * @param {any[]} array 
 * @param {number} size
 * @returns {any[][]}
 */
function chunk(array, size) {
  const chunked = [];
  let index = 0;

  while(index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }

  return chunked;
}

module.exports = chunk;


// // Solution 1
// function chunk(array, size) {
//   const chunked = [];

//   for (let item of array) {
//     const lastChunk = chunked[chunked.length - 1];

//     if (!lastChunk || lastChunk.length === size) {
//       chunked.push([item]);
//     } else {
//       lastChunk.push(item);
//     }
//   }

//   return chunked;
// }

// // Solution 2
// function chunk(array, size) {
//   const chunked = [];

//   for (let i = 0; i < array.length; i += size) {
//     chunked.push(array.slice(i, i + size));
//   }

//   return chunked;
// }