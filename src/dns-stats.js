const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const result = {}
  const list = []
  domains.forEach(domain => {
    domain = domain.split('.').reverse()
    const arr = []
    let dns = ''
    domain.forEach(segment => {
      dns += `.${segment}`
      arr.push(dns)
    })
    console.log(arr)
    list.push(arr)
  })
  
  const dnsList = list.flat()
  const dnsSet = new Set(dnsList)
  
  dnsSet.forEach((dns) => {
    let qty = dnsList.reduce(((count, el) => {
      if (el === dns) {
        count++
      }
      return count
    } ), 0)
    result[dns] = qty
  })
  return result
}

module.exports = {
  getDNSStats
};
