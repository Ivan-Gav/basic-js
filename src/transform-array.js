const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`)
  }
  let output = []
  arr.map(e => output.push(e))
  output.forEach((e, i, arr) => {
    if (e === '--discard-next') {
      if (output[i + 1]) {
        arr[i + 1] = '--delete'
      }  
      arr[i] = '--delete'
    } else if (e === '--discard-prev') {
      if (output[i - 1]) {
        arr[i - 1] = '--delete'
      }
      arr[i] = '--delete'
    } else if (e === '--double-next') {
      if (arr[i + 1]) {
        arr[i] = arr[i + 1]
      } else {
        arr[i] = '--delete'
      }
    } else if (e === '--double-prev') {
      if (arr[i - 1]) {
        arr[i] = arr[i - 1]
      } else {
        arr[i] = '--delete'
      }
    }
  })
  return output.filter(e => e !== '--delete')
}

module.exports = {
  transform
};
