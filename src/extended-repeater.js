const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let modifiedStr = str
  if (!options.additionSeparator) { options.additionSeparator = '|'}
  if (options.hasOwnProperty('addition')) {
    modifiedStr += repeat(options.addition, options.additionSeparator, options.additionRepeatTimes)
  }
  return repeat(modifiedStr, options.separator, options.repeatTimes)
}

function repeat (str, separator = '+', repeatTimes = 1) {
  let output = ''
  for (let i = 1; i <= repeatTimes; i++) {
    output += str + ((i === repeatTimes) ? '' : separator)
  }
  return output
}

module.exports = {
  repeater
};
