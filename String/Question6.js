/**
 * Find the largest word
 * str = "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
 * output = "word - count" means typesetting - 11
 */

let str =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry";

let largestWordLength = 0;
let largestWord = "";

str.split(" ").forEach((word) => {
  if (word.length > largestWordLength) {
    largestWordLength = word.length;
    largestWord = word;
  }
});

console.log(`${largestWord} - ${largestWordLength}`);
