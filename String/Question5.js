/**
 * Get count of each unique character
 *
 * Example 1
 * str = "Hello World!"
 * output = {
 * "H": 1,
 * "e": 1,
 * "l": 3,
 * "o": 2,
 * "W": 1,
 * "r": 1,
 * "d": 1,
 * "!": 1,
 * }
 *
 * Assume both uppercase and lowercase character as same character
 * Note : Skip space
 */

let str = "My Name Is Khan";

let characterCount = {};

str
  .toLowerCase()
  .split("")
  .forEach((ch) => {
    if (ch !== " ")
      if (characterCount.hasOwnProperty(ch)) {
        characterCount[ch] += 1;
      } else {
        characterCount[ch] = 1;
      }
  });

console.log("characterCount :>> ", characterCount);
