/**
 * Rotate string by n places with both clockwise and anti-clockwise
 *
 * Example 1
 * Input :  string = "amazon", rotateBy = 2
 * Output :  "onamaz"
 *
 */

let str = "amazon";
let rototeBy = 2;

let stringLength = str.length;

let rotateClockwise =
  str.slice(stringLength - rototeBy, stringLength) +
  str.slice(0, stringLength - rototeBy);

let rotateAntiClockwise =
  str.slice(rototeBy, stringLength) + str.slice(0, rototeBy);

console.log("rotateClockwise :>> ", rotateClockwise);

console.log("rotateAntiClockwise :>> ", rotateAntiClockwise);
