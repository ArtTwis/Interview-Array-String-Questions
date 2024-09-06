/**
 *
 * Remove duplicate elements from an array
 * arr = [1, 2, 2, 3, 1, 4, 5, 7, 3]
 * output = [1, 2, 3, 4, 5, 7]
 *
 */

let arr = [1, 2, 2, 3, 1, 4, 5, 7, 3];

// Way 1

let uniqueArray = [...new Set(arr)];

console.log("uniqueArray :>> ", uniqueArray);

// Way 2

let uniqueArray2 = arr.filter(
  (element, index) => arr.indexOf(element) === index
);

console.log("uniqueArray2 :>> ", uniqueArray2);

// Way 3
let uniqueArray3 = [];

for (let i = 0; i < arr.length; i++) {
  if (!uniqueArray3.includes(arr[i])) uniqueArray3.push(arr[i]);
}

console.log("uniqueArray3 :>> ", uniqueArray3);
