'use strict';

function mergeSort(arr) {
  let n = arr.length;

  if (n > 1) {
    let mid = n / 2;
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);

    // sort the left side
    mergeSort(left);
    // sort the right side
    mergeSort(right);
    // merge the sorted left and right sides together
    merge(left, right, arr);
  }
  return arr;
}

function merge(left, right, arr) {
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      arr[k] = left[i];
      i++;
    }
    else {
      arr[k] = right[j];
      j++;
    }
    k++;
  }

  while (i < left.length) {
    arr[k] = left[i];
    i++;
    k++;
  }

  while (j < right.length) {
    arr[k] = right[j];
    j++;
    k++;
  }
}

// const arr = [38, 27, 43, 3, 9, 82, 10];
// const sortedArr = mergeSort(arr);
// console.log(sortedArr); // Output: [3, 9, 10, 27, 38, 43, 82]

module.exports = { mergeSort } ;
