/**
 * Reverse the string
 * str = "Hello World!"
 * output = "!dlroW olleH"
 */

let str = "Hello World!";

// Way 1

let reverseString = str.split("").reverse().join("");

console.log("reverseString :>> ", reverseString);

// Way 2

let reverseString2 = "";
for (let i = str.length - 1; i >= 0; i--) {
  reverseString2 += str[i];
}

console.log("reverseString2 :>> ", reverseString2);
