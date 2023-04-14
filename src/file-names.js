const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a lisgit pusht of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  names.forEach((name, ind, list) => {
    let count = 1
    for (j = ind + 1; j < list.length; j++)
      if (list[j] === name) {
        list[j] += `(${count})`
        count++
      }
  })
return names
}

module.exports = {
  renameFiles
};
