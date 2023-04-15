const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(str, key) {
    if ((!str) || (!key)) {
      throw new Error ('Incorrect arguments!')
    }
    
    let strArr = str.toUpperCase().split('')
    let keyArr = []
    let keyFlow = []
    const ltr = /[a-z]/i
    let output = []
    while (keyArr.length < strArr.length) {
      keyArr.push(...key.toUpperCase().split(''))
    } 
    keyArr.reverse()
  
    strArr.forEach(symbol => {
      if (ltr.test(symbol)) {
        keyFlow.push(keyArr.pop())
      } else {
        keyFlow.push(' ')
      }
    })
  
    for (let i = 0; i < strArr.length; i++) {
      let m = strArr[i].charCodeAt() - 65
      let k = keyFlow[i].charCodeAt() - 65
      let c
      if (ltr.test(strArr[i])) {
        c = (m + k) % 26
      } else {
        c = m
      }
      output.push(String.fromCharCode(c + 65))
    }
  
      return (this.direct) ? output.join('') : output.reverse().join('')
    }

    decrypt(str, key) {
      if ((!str) || (!key)) {
        throw new Error ('Incorrect arguments!')
      }

      let strArr = str.toUpperCase().split('')
      let keyArr = []
      let keyFlow = []
      const ltr = /[a-z]/i
      let output = []
      while (keyArr.length < strArr.length) {
        keyArr.push(...key.toUpperCase().split(''))
      } 
      keyArr.reverse()
    
      strArr.forEach(symbol => {
        if (ltr.test(symbol)) {
          keyFlow.push(keyArr.pop())
        } else {
          keyFlow.push(' ')
        }
      })
  
      for (let i = 0; i < strArr.length; i++) {
        let c = strArr[i].charCodeAt() - 65
        let k = keyFlow[i].charCodeAt() - 65
        let m
        if (ltr.test(strArr[i])) {
          m = (26 + c - k) % 26
        } else {
          m = c
        }
        output.push(String.fromCharCode(m + 65))
      }
    
      return (this.direct) ? output.join('') : output.reverse().join('')
    }
}

module.exports = {
  VigenereCipheringMachine
};
