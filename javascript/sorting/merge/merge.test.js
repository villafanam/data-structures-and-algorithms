'use strict';

const { mergeSort } = require('./index');

describe('mergeSort', () => {
  test('should sort an array of numbers in ascending order', () => {
    let input = [38, 27, 43, 3, 9, 82, 10];
    let expected = [3, 9, 10, 27, 38, 43, 82];
    let results = mergeSort(input);

    expect(results).toEqual(expected);
  });
});
