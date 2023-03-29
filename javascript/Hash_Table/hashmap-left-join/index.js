'use strict';

const HashTable = require('../hashTable');


const leftJoin = (hash1, hash2) => {
  let joinHash = new HashTable(hash1.size);

  for (let pos in hash1.buckets) {
    // console.log('pos', pos);
    let key = Object.keys(hash1.buckets[pos]);

    joinHash.buckets[pos] = [];
    joinHash.buckets[pos].push(key[0]);
    joinHash.buckets[pos].push( hash1.buckets[pos][key[0]]);

    if (hash2.buckets[pos]) {
      joinHash.buckets[pos].push(hash2.buckets[pos][key[0]]);
    }
    else {
      joinHash.buckets[pos].push(null);
    }
  }

  return joinHash;
};

// let hash1 = new HashTable(1024);
// hash1.set('diligent', 'employed');
// hash1.set('fond', 'enamored');
// hash1.set('guide', 'usher');
// hash1.set('outfit', 'garb');
// hash1.set('wrath', 'anger');

// let hash2 = new HashTable(1024);
// hash2.set('diligent', 'idle');
// hash2.set('fond', 'averse');
// hash2.set('guide', 'follow');
// hash2.set('flow', 'jam');
// hash2.set('wrath', 'delight');

// console.log('resutls: ', leftJoin(hash1, hash2));

module.exports = leftJoin;
