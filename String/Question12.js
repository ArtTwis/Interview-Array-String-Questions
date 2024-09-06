/**
 * Longest common prefix
 *
 * Example 1
 * Input: strs[] = [“geeksforgeeks”, “geeks”, “geek”, “geezer”]
 * Output: gee
 *
 * Example 2
 * Input: strs[] = [“hello”, “world”]
 * Output: -1
 */

let strs = ["geeksforgeeks", "geeks", "geek", "geezer"];

let prefixString = "";
let temp = 1;

while (true) {
  let prefix = strs[0].substring(0, temp);

  let result = strs.every((element) => {
    if (element.substring(0, temp) !== prefix) {
      return false;
    } else {
      return true;
    }
  });

  if (result) {
    prefixString = prefix;
    temp++;
  } else {
    break;
  }
}

console.log("prefixString :>> ", prefixString);
