/**
 * Get last character of words
 *
 * Example 1
 * str = "Hello World!"
 * output = "o!"
 *
 * Example 2
 * str = "My Name Is Khan"
 * output = "yesn"
 */

// let str = "Hello World!";
let str = "My Name Is Khan";

// Way1
let output = str
  .split(" ")
  .map((word) => word[word.length - 1])
  .join("");

console.log("output :>> ", output);

// Way2
let output2 = "";

for (let i = 0; i < str.length; i++) {
  if (str[i + 1] === " ") output2 += str[i];
}

output2 += str[str.length - 1];

console.log("output2 :>> ", output2);
