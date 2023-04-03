'use strict';


const Graph = require('../graph');


function graphBreadthFirst(root, graph, callback) {
  const queue = [root];
  const visted = new Set();

  visted.add(root);
  let current = null;

  while (queue.length) {
    current = queue.pop();

    if (callback) {
      callback(current.value);
    }

    const neighbors = graph.getNeighbors(current);

    for (let edge of neighbors) {
      if (!visted.has(edge.vertex)) {
        visted.add(edge.vertex);
        queue.unshift(edge.vertex);
      }
    }
  }
  return visted;
}

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

graphBreadthFirst(A, graph, console.log);



//module.exports = graphBreadthFirst;

