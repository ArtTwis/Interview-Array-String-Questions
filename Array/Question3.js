/**
 *
 * Reverse the array
 * arr = [1, 2, 3, 4, 5]
 * output = [5, 4, 3, 2, 1]
 *
 */

let arr = [1, 2, 3, 4, 5];

// Way 1
let reversedArray = [...arr].reverse();

console.log("reversedArray :>> ", reversedArray);

// Way 2
let reversedArray2 = [];

for (let i = arr.length - 1; i >= 0; i--) {
  reversedArray2.push(arr[i]);
}

console.log("reversedArray2 :>> ", reversedArray2);
