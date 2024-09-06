/**
 *
 * Add index to its corresponsing element of an array
 * arr = [1, 2, 3, 4, 5]
 * output = [1, 3, 5, 7, 9]
 *
 */

let arr = [1, 2, 3, 4, 5];

// Way 1
let newArray = [];

for (let i = 0; i < arr.length; i++) {
  newArray.push(arr[i] + i);
}

console.log("newArray :>> ", newArray);

// Way 3
let newArray2 = [];

arr.forEach((element, index) => {
  newArray2.push(element + index);
});

console.log("newArray2 :>> ", newArray2);

// Way 2
let newArray3 = arr.map((element, index) => element + index);

console.log("newArray3 :>> ", newArray3);
