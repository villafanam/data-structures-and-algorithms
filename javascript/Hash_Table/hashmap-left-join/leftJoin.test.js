'use strict';

const HashTable = require('../hashTable');
const leftJoin = require('./index');

let hash1 = new HashTable(1024);
hash1.set('diligent', 'employed');
hash1.set('fond', 'enamored');
hash1.set('guide', 'usher');
hash1.set('outfit', 'garb');
hash1.set('wrath', 'anger');

let hash2 = new HashTable(1024);
hash2.set('diligent', 'idle');
hash2.set('fond', 'averse');
hash2.set('guide', 'follow');
hash2.set('flow', 'jam');
hash2.set('wrath', 'delight');

describe('Hash Map left Join', () => {
  it('returns expected result', () => {
    let result = leftJoin(hash1, hash2);
    let pos = result.hash('diligent');
    let bucket = result.buckets[pos];

    expect(result.has('diligent')).toEqual(true);
    expect(bucket).toEqual(['diligent', 'employed', 'idle']);
  });
});
