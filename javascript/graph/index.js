'use strict';

class Node {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(node, weight = 0) {
    this.vertex = node;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addNode(value) {
    const vertex = new Node(value);
    this.adjacencyList.set(vertex, []);
    return vertex;
  }

  addDirectedEdge(startNode, endNode, weight = 0) {
    const neighbor = this.adjacencyList.get(startNode);
    neighbor.push(new Edge(endNode, weight));
  }
  // addEdge(vertex1, vertex2, weight = 0) { }

  getNodes() {
    let iterator = this.adjacencyList.keys();
    return iterator;
  }

  getNeighbors(vertex) {
    return [...this.adjacencyList.get(vertex)];
  }

  size() {
    this.adjacencyList.size;
  }

  breadthFirst(root, callback) {
    const queue = [root];
    const visted = new Set();

    visted.add(root);
    let current = null;

    while (queue.length) {
      current = queue.pop();

      if (callback) {
        callback(current.value);
      }

      const neighbors = this.getNeighbors(current);

      for (let edge of neighbors) {
        if (!visted.has(edge.vertex)) {
          visted.add(edge.vertex);
          queue.unshift(edge.vertex);
        }
      }
    }
    return visted;
  }


  depthFirst(root, callback) {
    const stack = [root];
    const visited = new Set();
    visited.add(root);
    let current = null;

    while (stack.length) {
      current = stack.pop();

      if (callback) {
        callback(current.value)
      }

      const neighbors = this.getNeighbors(current);
      for (let edge of neighbors) {
        if (!visited.has(edge.vertex)) {
          visited.add(edge.vertex);
          stack.push(edge.vertex);
        }
      }
    }
    return visited;
  }

}


module.exports = Graph;
