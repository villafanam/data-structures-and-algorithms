'use strict';

const Graph = require('../graph');

const graph = new Graph();

const A = graph.addNode('A');
const B = graph.addNode('B');
const C = graph.addNode('C');
const D = graph.addNode('D');
const E = graph.addNode('E');
const F = graph.addNode('F');
const G = graph.addNode('G');
const H = graph.addNode('H');

graph.addDirectedEdge(A, B);
graph.addDirectedEdge(A, D);
graph.addDirectedEdge(A, C);
graph.addDirectedEdge(B, G);
graph.addDirectedEdge(D, F);
graph.addDirectedEdge(D, H);
graph.addDirectedEdge(F, H);
graph.addDirectedEdge(C, H);
graph.addDirectedEdge(F, E);

// graph.breadthFirst(A, console.log);
// console.log('-------------------');
// graph.depthFirst(A, console.log)
// console.log('-------------------');
// console.log(graph.size());

describe('Graph', () => {
  it('Return the expected result', () => {
    let temp = graph.depthFirst(A, console.log);
    let setIter = temp.keys();
    console.log('setIter:----' , setIter);
    expect(temp.has(A)).toEqual(true);
    expect(temp.has(H)).toEqual(true);

    expect(setIter.next().value).toEqual({ 'value': 'A' });
    expect(setIter.next().value).toEqual({ 'value': 'B' });
    expect(setIter.next().value).toEqual({ 'value': 'D' });
    expect(setIter.next().value).toEqual({ 'value': 'C' });
    expect(setIter.next().value).toEqual({ 'value': 'H' });
    expect(setIter.next().value).toEqual({ 'value': 'F' });
    expect(setIter.next().value).toEqual({ 'value': 'E' });
    expect(setIter.next().value).toEqual({ 'value': 'G' });
  });

});
