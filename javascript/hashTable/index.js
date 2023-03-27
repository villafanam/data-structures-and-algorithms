'use strict';

class HashTable {
  constructor(size) {
    this.size = size;
    this.buckets = new Array(size);
  }

  hash(key) {
    let characters = key.split('');
    //use the reducer pattern
    let asciiSum = characters.reduce((sum, character) => {
      return sum + character.charCodeAt(0);
    }, 0);

    //multiply ascii sum by a large prime number
    let intialHash = asciiSum * 599;
    return intialHash % this.size;
  }

  set(key, value) {
    let pos = this.hash(key);
    let data = { [key]: value };

    if (this.buckets[pos]) {
      let bucket = this.buckets[pos];
      bucket[`${key}`] = value;
    }
    else {
      this.buckets[pos] = data;
    }
  }

  get(key) {
    let pos = this.hash(key);

    if (this.buckets[pos]) {
      let bucket = this.buckets[pos];
      return bucket[`${key}`];
    }
    else {
      return null;
    }
  }

  has(key) {
    let pos = this.hash(key);
    if (this.buckets[pos]) {
      return true;
    }
    else {
      return false;
    }
  }

  keys() {
    let keyCollection = this.buckets.reduce((kArr, element) => {
      if (element) {
        let key = Object.keys(element);
        //console.log('key: ', key);
        kArr.push(key[0]);
        return kArr;

      }
    }, []);

    return keyCollection;
  }

}

module.exports = HashTable;

// const table = new HashTable(100);
// table.set('Ray', 'he/him');
// table.set('Marco', 'he/him');
// table.set('Maya', 'she/her');
//console.log(table);
// console.log(table.get('Ryan'));
// console.log('has: ', table.has('Ryan'));
// console.log('has: ', table.has('Steve'));
// console.log('keyCollection:' , table.keys());
