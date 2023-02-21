'use strict';

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
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

  append(value){
    let current = this.head;

    while(current.next)
    {
      current = current.next;
    }
    current.next = new Node(value);
  }

  insertBefore(key, value){
    let current = this.head;

    while(current)
    {
      //do the thing
      if(current.value === key)
      {
        let node = new Node(current.value, current.next);

        current.value = value;
        current.next = node;

        //console.log(node);
        break;
      }
      current = current.next;
    }
  }

  insertAfter(key, value){
    let current = this.head;

    while(current)
    {
      //do the thing
      if(current.value === key)
      {
        let node = new Node(value, current.next);
        current.next = node;
        //console.log(node);
        break;
      }
      current = current.next;
    }
  }

  kthFromEnd(k){
    let current = this.head;
    let len = 0;

    while(current)
    {
      //do the thing
      len++;
      current = current.next;
    }

    current = this.head;

    for(let i = len; i > 0; i--)
    {
      if(i === k)
      {
        return current.value;
      }
      current = current.next;
    }
    return null;
  }



}

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

module.exports = LinkedList;
