const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let small
  let big
  
  if (s1.length < s2.length) {
    small = s1
    big = s2
  } else {
    big = s1
    small = s2
  }

  let count = 0

  small.split('').forEach(letter => {
    let i = big.indexOf(letter)
    if (i !== (-1)) {
      big = big.slice(0,i) + big.slice(i+1)
      count++
    }
  })

  return count
}

module.exports = {
  getCommonCharacterCount
};
