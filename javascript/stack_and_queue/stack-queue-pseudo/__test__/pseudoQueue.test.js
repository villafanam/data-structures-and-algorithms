'use strict';
const PsuedoQueue  = require('../pseudoQueue');


describe('Pseudo Queue', () => {
  it('PsuedoQ can enqueue', () => {
    const pQ = new PsuedoQueue();
    pQ.enqueue(1);
    pQ.enqueue(2);
    pQ.enqueue(3);
    expect(pQ.stack1.peek()).toEqual(1);
  });

  it('PsuedoQ can dequeue', () => {
    const pQ = new PsuedoQueue();
    pQ.enqueue(1);
    pQ.enqueue(2);
    pQ.enqueue(3);
    pQ.dequeue();
    expect(pQ.stack1.peek()).toEqual(2);
  });

});
