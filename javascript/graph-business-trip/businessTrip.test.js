'use strict';

const Graph = require('../graph');
const businessTrip = require('./');

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


describe('businessTrip', () => {
  it('Return the expected result', () => {
    const result = businessTrip(graph, cities);
    console.log(result);

    expect(result).toEqual(265);
  });

});
