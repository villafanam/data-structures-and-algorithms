'use strict';

const { insertionSort } = require('../index');

describe('Insertion Sort', () => {
  it('returns sorted array as expected', () => {
    let results = insertionSort([8,4,23,42,16,15]);
    expect(results).toEqual( [ 4, 8, 15, 16, 23, 42 ]);
  });

  it('returns as expected for reverse-sorted input array', () => {
    let results = insertionSort([20,18,12,8,5,-2]);
    expect(results).toEqual([ -2, 5, 8, 12, 18, 20 ]);
  });

  it('returns as expected for few uniques input array', () => {
    let results = insertionSort([5,12,7,5,5,7]);
    expect(results).toEqual([ 5, 5, 5, 7, 7, 12 ]);
  });

  it('returns as expected for nearly-sorted input array', () => {
    let results = insertionSort([2,3,5,7,13,11]);
    expect(results).toEqual([ 2, 3, 5, 7, 11, 13 ]);
  });

});
