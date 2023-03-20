'use strict';

function insert(sortedArr, value)
{
  let i = 0;

  while(value > sortedArr[i])
  {
    i = i + 1;
  }

  while(i < sortedArr.length)
  {
    let temp = sortedArr[i];
    sortedArr[i] = value;
    value = temp;
    i = i + 1;
  }

  sortedArr.push(value);
}

function insertionSort(inputArr)
{
  let sorted = [];
  sorted[0] = inputArr[0];

  for(let i = 1; i < inputArr.length; i++)
  {
    insert(sorted, inputArr[i]);
  }

  return sorted;
}

// let arr = [8,4,23,42,16,15];
// let results = insertionSort(arr);
// console.log('results:        ', results);
// console.log('Reverse-sorted: ', insertionSort([20,18,12,8,5,-2]));
// console.log('Few Uniques:    ', insertionSort([5,12,7,5,5,7]));
// console.log('Nearly-sorted:  ', insertionSort([2,3,5,7,13,11]));

module.exports = { insertionSort } ;
