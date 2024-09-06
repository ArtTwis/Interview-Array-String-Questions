/**
 *
 * Get array of first n element except 0
 * input: arr = [2, 6, 0, 3, 0, 0, 12, 22, 0, 0, 0, 2, 25, 30, 35, 0, 0 , 0] and n = 5
 * output = [2, 6, 3, 12, 22]
 *
 */

let arr = [2, 6, 0, 3, 0, 0, 12, 22, 0, 0, 0, 2, 25, 30, 35, 0, 0, 0];

let n = 5;

// Way 1
let newArray = [];

for (let i = 0; i < arr.length; i++) {
  if (newArray.length < n) {
    if (arr[i] !== 0) {
      newArray.push(arr[i]);
    }
  } else {
    break;
  }
}

console.log("newArray :>> ", newArray);

// Way 2

let newArray2 = arr.filter((element) => element !== 0).slice(0, n);

console.log("newArray2 :>> ", newArray2);
