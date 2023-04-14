const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr = str.split('')

  for (let i = 1; i < arr.length; i++) {
      if (arr[i] !== arr[i-1]){
        arr[i-1] += '.'
      }
    }

  return arr.join('')
            .split('.')  
            .map(e => {
              if (e.length > 1) {
                e = `${e.length}${e[0]}`
              }
              return e
            })
            .join('')
}

module.exports = {
  encodeLine
};
