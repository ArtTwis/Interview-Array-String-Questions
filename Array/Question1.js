/**
 *
 * Double each element of an array
 * arr = [1, 2, 3, 4, 5]
 * output = [2, 4, 6, 8, 10]
 *
 */

let arr = [1, 2, 3, 4, 5];

// Way 1
let doubleArray = [];

for (let i = 0; i < arr.length; i++) {
  doubleArray.push(arr[i] * 2);
}

console.log("doubleArray :>> ", doubleArray);

// Way 3
let doubleArray2 = [];

arr.forEach((element) => {
  doubleArray2.push(element * 2);
});

console.log("doubleArray2 :>> ", doubleArray2);

// Way 2
let doubleArray3 = arr.map((element) => element * 2);

console.log("doubleArray3 :>> ", doubleArray3);
