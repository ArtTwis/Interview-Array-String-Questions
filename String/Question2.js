/**
 * Get first character of words
 *
 * Example 1
 * str = "Hello World!"
 * output = "HW"
 *
 * Example 2
 * str = "My Name Is Khan"
 * output = "MNIK"
 */

// Way 1

let str = "My Name Is Khan";

let output = str
  .split(" ")
  .map((element) => element[0])
  .join("");

console.log("output :>> ", output);

// Way 2
let output2 = "";

if (str !== "") {
  output2 += str[0];

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === " ") output2 += str[i];
  }
}

console.log("output2 :>> ", output2);
