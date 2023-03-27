'use strict';
const { Stack, Queue } = require('../stack-and-queue/index');



function validateBrackets(str) {
  const openerStack = new Stack();
  const closerQ = new Stack();
  //const closerQ = new Queue();
  for (let char of str) {
    if (char === '{' || char === '(' || char === '[') {
      openerStack.push(char);
    }
    if (char === '}' || char === ')' || char === ']') {
      closerQ.push(char);
      //closerQ.enqueue(char);
    }
  }
  //if (openerStack.length !== closerQ.length) return false;
  //console.log(openerStack.print());
  //console.log(closerQ.print());
  while (openerStack.top) {
    let currOpener = openerStack.pop();
    // let currCloser = closerQ.dequeue();
    let currCloser = closerQ.pop();

    console.log(currOpener, currCloser);
    if (currOpener === '{' && currCloser !== '}') return false;
    if (currOpener === '(' && currCloser !== ')') return false;
    if (currOpener === '[' && currCloser !== ']') return false;
  //   if ((openerStack.pop() === '{' && closerQ.pop() === '}')) console.log('Curlies');
  //   if ((openerStack.pop() === '(' && closerQ.pop() === ')')) console.log('Parens');
  //   if ((openerStack.pop() === '[' && closerQ.pop() === ']')) console.log('Square');
  }
  return true;
}

//true
console.log(validateBrackets('()[[Extra Characters]]'));
console.log(validateBrackets('{}{Code}[Fellows](())'));
console.log(validateBrackets('(){}[[]]'));

//false
console.log(validateBrackets('{(})'));
