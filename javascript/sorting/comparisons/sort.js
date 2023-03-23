'use strict';

//const { mainModule } = require('process');

// need to write the "callback" compareYear
function sortYear(arr) {
  return arr.sort(compareYear);
}


function compareYear(a, b) {
  //do the thing
  return b.year - a.year;
}

function sortTitle(arr) {
  return arr.sort(compareTitle);

}


function compareTitle(a, b) {
  //do the thing
  let a2 = '';
  let b2 = '';

  if (a.title.includes('A ')) {
    a2 = a.title.replace('A ', '');
  }
  else if (a.title.includes('An ')) {
    a2 = a.title.replace('An ', '');
  }
  else if (a.title.includes('The ')) {
    a2 = a.title.replace('The ', '');
  }
  else {
    a2 = a.title;
  }

  if (b.title.includes('A ')) {
    b2 = b.title.replace('A ', '');
  }
  else if (b.title.includes('An ')) {
    b2 = b.title.replace('An ', '');
  }
  else if (b.title.includes('The ')) {
    b2 = b.title.replace('The ', '');
  }
  else {
    b2 = b.title;
  }

  if (a2 > b2) { return 1; }

  if (a2 < b2) { return -1; }

  return 0;
}


module.exports = { sortYear, compareYear, sortTitle, compareTitle };
