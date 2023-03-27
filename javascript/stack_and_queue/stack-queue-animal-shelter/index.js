'use strict';

const { Queue } = require('../stack-and-queue/index');

class AnimalShelter
{
  constructor(){
    this.shelter = new Queue();
  }

  enqueue(animal){
    if(animal.species && (animal.species === 'cat' || animal.species === 'dog'))
    {
      if(typeof animal.name === 'string')
      {
        this.shelter.enqueue(animal);
      }
    }
  }

  dequeue(pref){
    let result = this.shelter.dequeue();

    if(result.species === pref)
    {
      return result;
    }
    else
    {
      return null;
    }
  }
}

module.exports = {AnimalShelter};
