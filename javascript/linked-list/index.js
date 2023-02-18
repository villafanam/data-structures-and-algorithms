'use strict';

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    // const oldHead = this.head;
    // this.head = new Node(value);
    // this.head.next = oldHead;

    //or
    this.head = new Node(value, this.head);
  }

  includes(value)
  {
    let current = this.head;

    while(current)
    {
      if(current.value === value)
      {
        return true;
      }

      current = current.next;
    }

    return false;
  }

  toString()
  {
    //'{ banana } -> { apple } -> NULL'
    let current = this.head;
    let text = '';

    while(current)
    {
      text += `{ ${current.value} } -> `;

      current = current.next;
    }

    return text + 'NULL';
  }
}

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

module.exports = LinkedList;
