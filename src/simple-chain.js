const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chainArr: [],

  getLength() {
    return this.chainArr.length
  },
  addLink(value = '') {
    this.chainArr.push(`( ${value} )`)
    return this
  },
  removeLink(position) {
    if ((!position) 
        || (typeof position !== 'number') 
        || (position < 1) 
        || (position > this.chainArr.length)) {
          this.chainArr = []
          throw new Error (`You can\'t remove incorrect link!`)
        }
    this.chainArr.splice((position-1),1)
    return this
  },
  reverseChain() {
    this.chainArr.reverse()
    return this
  },
  finishChain() {
    const output = this.chainArr.join('~~')
    this.chainArr = []
    return output
  },
  printChain() {
    console.log(this.chainArr.join('~~'))
  }

}

module.exports = {
  chainMaker
};
