/**
 * Camel case of given sentence
 *
 * Example 1
 * Input  : I got intern at geeksforgeeks
 * Output : IGotInternAtGeeksforgeeks
 *
 * Example 2
 * Input :  Here comes the garden
 * Output : HereComesTheGarden
 *
 */

let str = "I got intern at geeksforgeeks";

let CamelCaseString = str
  .split(" ")
  .map(
    (word) =>
      word.substring(0, 1).toUpperCase() +
      (word.length > 1 ? word.substring(1, word.length) : "")
  )
  .join("");

console.log("CamelCaseString :>> ", CamelCaseString);
