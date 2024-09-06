/**
 *
 * Filter unique and odd numbers from an array
 * arr = [1, 2, 2, 3, 1, 4, 5, 7, 3]
 * output = [1, 3, 5, 7]
 *
 */

let arr = [1, 2, 2, 3, 1, 4, 5, 7, 3];

// Way1

let oddArray = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 !== 0) {
    if (!oddArray.includes(arr[i])) {
      oddArray.push(arr[i]);
    }
  }
}

console.log("oddArray :>> ", oddArray);

// Way2

let oddArray2 = [...new Set(arr.filter((element) => element % 2 !== 0))];

console.log("oddArray2 :>> ", oddArray2);
