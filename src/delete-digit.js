const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arrOfDigits = n.toString().split('')
  const arrOfNumbers = []
  arrOfDigits.forEach((digit, ind, arr) => {
   arr[ind] = ''
   arrOfNumbers.push(Number(arr.join('')))
   arr[ind] = digit
  })
  return Math.max(...arrOfNumbers)
 }

module.exports = {
  deleteDigit
};
