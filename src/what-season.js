const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) {
    return ('Unable to determine the time of year!')
  }
  if (date.hasOwnProperty('toString')) {
    throw new Error ('Invalid date!')
  }
  if (isNaN(Date.parse(date))) {
    throw new Error ('Invalid date!')
  }
  let output
  let month = date.getMonth()
  if ((month < 2) || (month === 11)) {
    output = 'winter'
  } else if (month < 5) {
    output = 'spring'
  } else if (month < 8) {
    output = 'summer'
  } else {
    output = 'fall'
  }
  return output
}

module.exports = {
  getSeason
};
