/**
 * Sort string of characters
 *
 * Example 1
 * Input  : bbccdefbbaa
 * Output : aabbbbccdef
 *
 * Example 2
 * Input :  geeksforgeeks
 * Output : eeeefggkkorss
 *
 */

let str = "geeksforgeeks";

let sortedString = str.split("").sort().join("");

console.log("sortedString :>> ", sortedString);
