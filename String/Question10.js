/**
 * Print all substrings of a given string
 *
 * Example 1
 * Input :  abcd
 * Output :  [ a, b, c, d, ab, bc, cd, abc, bcd, abcd, bcda, cdab, dabc ]
 *
 */

let str = "abcd";

let subStringsArray = [];

for (let i = 1; i <= str.length; i++) {
  for (let j = 0; j < str.length; j++) {
    if (j + i <= str.length) {
      let temp = str.slice(j, j + i);
      subStringsArray.push(temp);
    } else {
      let diff = j + i - str.length;
      let temp = str.slice(j, j + i) + str.slice(0, diff);
      subStringsArray.push(temp);
    }
  }
}

console.log("subStringsArray :>> ", subStringsArray);
