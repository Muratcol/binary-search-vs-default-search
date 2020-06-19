const { performance } = require("perf_hooks");

t = performance.now();
array = [
  14,
  3,
  24,
  34,
  19,
  36,
  4,
  18,
  12,
  28,
  39,
  32,
  29,
  5,
  21,
  7,
  13,
  33,
  26,
  22,
  8,
  15,
  38,
  11,
  9,
  30,
  20,
  1,
  6,
  0,
  27,
  25,
  35,
  16,
  10,
  31,
  2,
  37,
  17,
  23,
];

const t0 = performance.now();
// Sort function already implemented to JS
// We must use sort function if we gonna use binary search.
// But array.find function doesn't need sorted array
let valueWeWantToSearch = 5;
array.sort(compareNumbers);

// array.find(findFunc)
binarySearch(array, valueWeWantToSearch);
const t1 = performance.now();
console.log(`Call to doSomething took ${t1 - t0} milliseconds.`);

// Due to performance timer, JS implemented search method
// Much faster then binary search. Also, It doesn't
// asks sorted array. But it is not dynamic.

function compareNumbers(a, b) {
  return a - b;
}

// JS default search function needs an callback function.
function findFunc(searchElement) {
  return searchElement === 5;
}

function binarySearch(array, searchElement) {
  // Binary Search

  let start = 0,
    end = array.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (array[mid] == searchElement) return true;
    else if (array[mid] < searchElement) {
      // Checks right side of array
      start = mid + 1;
    }
    // Checks left side of array
    end = mid - 1;
  } 
  return false;
}
