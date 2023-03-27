'use strict';

const HashTable = require('../hashTable/')

const repeatedWord = (str) => {
  const table = new HashTable(1024);
  let punctuation = [',', '.', ';', ':', '-', '_', '!', '?'];
  let newStr = '';

  for(let i = 0; i < str.length; i++){
    if(!punctuation.includes(str[i])){
      newStr += str[i];
    }
  }

  let wordArr = newStr.split(' ');

  for(let i = 0; i < wordArr.length; i++){
    let word = wordArr[i].toLowerCase();
    if(table.has(word)){
      return word;
    }
    else {
      table.set(word, true);
    }
  }

  return null;
};

module.exports = repeatedWord;



console.log(repeatedWord("Once upon a time, there was a brave princess who..."));
