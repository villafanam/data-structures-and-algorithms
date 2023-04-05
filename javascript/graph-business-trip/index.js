'use strict';

const Graph = require('../graph');

const businessTrip = (graph, cityArr) => {
  let cost = 0;
  let cityEdges = '';
  let cityVert = '';


  for (let i = 0; i < cityArr.length; i++) {
    let keyIterator = graph.adjacencyList.keys();
    //console.log('key:---', keyIterator);

    for (let vert of keyIterator) {
      if (vert.value === cityArr[i]) {
        cityVert = vert;
        break;
      }
    }

    if (cityVert === '') return null;

    cityEdges = graph.adjacencyList.get(cityVert);

    for (let j = 0; j < cityEdges.length; j++) {
      if (cityEdges[j].vertex.value === cityArr[i + 1]) {
        cost += cityEdges[j].weight;
      }
    }
  }
  return cost;
};

const graph = new Graph();

const pandora = graph.addNode('Pandora');
const arendelle = graph.addNode('Arendelle');
const metroville = graph.addNode('Metroville');
const monstroplolis = graph.addNode('Monstroplolis');
const naboo = graph.addNode('Naboo');
const narnia = graph.addNode('Narnia');
graph.addDirectedEdge(pandora, arendelle, 150);
graph.addDirectedEdge(pandora, metroville, 82);
graph.addDirectedEdge(arendelle, metroville, 99);
graph.addDirectedEdge(arendelle, monstroplolis, 42);
graph.addDirectedEdge(metroville, monstroplolis, 105);
graph.addDirectedEdge(metroville, naboo, 26);
graph.addDirectedEdge(metroville, narnia, 37);
graph.addDirectedEdge(monstroplolis, naboo, 73);
graph.addDirectedEdge(naboo, narnia, 250);
const cities = ['Pandora', 'Arendelle', 'Monstroplolis', 'Naboo'];
const result = businessTrip(graph, cities);
console.log(result);

//businessTrip(graph, ['Metroville', 'Pandora']);

module.exports = businessTrip;
