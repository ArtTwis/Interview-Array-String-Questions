/**
 * Remove all occurences of a character in a string
 *
 * Example 1
 * Input  : string = "geeksforgeeks", character = "e"
 * Output : "gksforgks"
 *
 * Example 2
 * Input  : string = "geeksforgeeks"", character = "g"
 * Output : "eeksforeeks"
 *
 */

let str = "geeksforgeeks";

let removedCharacter = "g";

// Way1

let newString = str
  .split("")
  .filter((ch) => ch !== removedCharacter)
  .join("");

console.log("newString :>> ", newString);

// Way2

let newString2 = "";

for (let i = 0; i < str.length; i++) {
  if (str[i] !== removedCharacter) newString2 += str[i];
}

console.log("newString2 :>> ", newString2);
