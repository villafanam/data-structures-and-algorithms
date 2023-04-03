'use strict';

const Graph = require('./');

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
  it('Node can be successfully added to the graph', () => {
    expect(graph.adjacencyList.has(A)).toEqual(true);
    expect(graph.adjacencyList.has(H)).toEqual(true);
  });

  it('An edge can be successfully added to the graph', () => {
    let results = graph.adjacencyList.get(A);
    console.log(B);
    console.log('results----', results);
    expect(results.includes(B)).toEqual(true);

  });
});
