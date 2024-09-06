/**
 *
 * Replace each element of array with its corresponsing rank..
 * arr = [4, 7, 2, 90]
 *
 * step1: sort array
 * [2, 4, 7, 90]
 *
 * step2: rank of each element
 * [2: 1, 4: 2, 7: 3, 90: 4]
 *
 * output = [2, 3, 1, 4]
 *
 */

let arr = [4, 7, 2, 90];

let rankObj = {};

arr.forEach((element) => (rankObj[element] = 0));

let sortedArray = [...arr].sort();

let rank = 1;

sortedArray.forEach((element) => {
  if (rankObj[element] === 0) {
    rankObj[element] = rank;
    rank += 1;
  }
});

let rankedArray = arr.map((element) => rankObj[element]);

console.log("rankedArray :>> ", rankedArray);
