/**
 * Return the length of the longest word in the provided sentence.
 *
 * @param {array} arr
 * @returns {number}
 *
 * @example findLongestWordLength("The quick brown fox jumped over the lazy dog") should return 6
 * @example findLongestWordLength("What is the average airspeed velocity of an unladen swallow") should return 8
 */
const findLongestWordLength = (str) => Math.max(...str.split(" ").map(word => word.length))

/**
 * Find the missing letter in the passed letter range and return it
 * @param {string} letters
 * @returns {string} returns the missing letter from the string
 * @example
 *   fearNotLetter("abce") should return "d".
 *   fearNotLetter("abcdefghjklmno") should return "i".
 *   fearNotLetter("stvwx") should return "u".
 *   fearNotLetter("bcdf") should return "e".
 *   fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.
 *
 */
const fearNotLetter = (str) => {
  // get the correct letter range for the given start letter
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  const startLetter = alphabet.indexOf(str[0])
  const range = str.length
  correctLetters = alphabet.slice(startLetter, startLetter + range)

  // compare actual string against desired, first wrong is returned
  for (let i = 0; i < range; i++) {
    let current = correctLetters[i]
    if (current !== str[i]) return current
  }
} // function will return undefined if nothing else is returned

module.exports = {
  findLongestWordLength,
  fearNotLetter,
};
