'use strict';

const HashTable = require('./index');


const table = new HashTable(100);

describe('Hash Table', () => {
  it('Setting a key/value to your hashtable results in the value being in the data structure', () => {
    table.set('Ray', 'he/him');
    table.set('Marco', 'he/him');
    table.set('Maya', 'she/her');

    expect(table.has('Ray')).toEqual(true);
    expect(table.has('Marco')).toEqual(true);
    expect(table.has('Maya')).toEqual(true);
  });

  it('Retrieving based on a key returns the value stored', () => {
    expect(table.get('Ray')).toEqual('he/him');
    expect(table.get('Marco')).toEqual('he/him');
    expect(table.get('Maya')).toEqual('she/her');
  });

  it('Successfully returns null for a key that does not exist in the hashtable', () => {
    expect(table.get('Steve')).toBeNull();
  });

  it('Successfully returns a list of all unique keys that exist in the hashtable', () => {
    expect(table.keys()).toEqual(['Ray', 'Marco', 'Maya']);
  });

  it('Successfully handle a collision within the hashtable', () => {
    table.set('Ray', 'New Value');
    expect(table.get('Ray')).toEqual('New Value');
  });

  //check this test
  it('Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
    table.set('Ray', 'New Value');
    expect(table.get('Ray')).toEqual('New Value');
  });

  it('Successfully hash a key to an in-range value', () => {
    let key1 = table.hash('Ray');
    let key2 = table.hash('Marco');
    let key3 = table.hash('villafana');

    expect(key1).toBeLessThan(table.size);
    expect(key2).toBeLessThan(table.size);
    expect(key3).toBeLessThan(table.size);

    expect(key1).toBeGreaterThanOrEqual(0);
    expect(key2).toBeGreaterThanOrEqual(0);
    expect(key3).toBeGreaterThanOrEqual(0);
  });

});
