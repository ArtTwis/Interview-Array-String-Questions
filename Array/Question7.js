/**
 *
 * Get count of each element
 * input: arr = [1, 2, 1, 2, 2, 3, 4, 3, 4, 4, 4, 5]
 * output = {
 *  1: 2,
 *  2: 3,
 *  3: 2,
 *  4: 4,
 *  5: 1
 * }
 *
 */

let arr = [1, 2, 1, 2, 2, 3, 4, 3, 4, 4, 4, 5];

// Way 1
let countObject = {};

for (let i = 0; i < arr.length; i++) {
  if (countObject[arr[i]]) {
    countObject[arr[i]] += 1;
  } else {
    countObject[arr[i]] = 1;
  }
}

console.log("countObject :>> ", countObject);

// Way 2
let countObject2 = {};

arr.forEach((element) =>
  countObject2[element]
    ? (countObject2[element] += 1)
    : (countObject2[element] = 1)
);

console.log("countObject2 :>> ", countObject2);
