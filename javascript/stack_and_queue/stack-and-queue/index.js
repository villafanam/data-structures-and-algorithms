'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/**
 *
 */
class Stack {
  constructor() {
    this.top = null;
  }

  /**
   * adds a new node with that value to the top of the stack with an O(1) Time performance.
   * @param {*} value
   *
   */
  push(value) {
    let newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
  }

  /**
   *  removes reference to the top node and returns the value of the node from the top of the stack
   *  @returns the value of the node from the top
   */
  pop() {
    let removedValue = null;
    if (this.top) {
      removedValue = this.top.value;
      this.top = this.top.next;
    }
    return removedValue;
  }

  /**
   * Returns value of the node located at the top of the stack
   * @returns Value of the node located at the top of the stack
   */
  peek() {
    return this.top ? this.top.value : this.top;
  }

  /**
   * Indicates whether or not the stack is empty.
   * @returns Boolean indicating whether or not the stack is empty.
   */
  isEmpty() {
    return this.top === null;
  }
}

class Queue {
  constructor(){
    this.front = null;
    this.back = null;
  }

  /**
   * Adds a new node with that value to the back of the queue with an O(1) Time performance.
   * @param {*} value
   */
  enqueue(value){
    let newNode = new Node(value);
    if(this.front){
      // get ready to get in line
      this.back.next = newNode;
    } else {
      // you are at the front of the line
      this.front = newNode;
    }
    // either way buddy, you are the back of the line!
    this.back = newNode;
  }

  /**
   * Removes the node from the front of the queue
   * @returns the value from node from the front of the queue

   */
  dequeue(){
    let removedValue = null;
    if(this.front){
      removedValue = this.front.value;
      // if there was only one node in q
      if(this.front === this.back){
        // make sure the back is null after removing the last node
        this.back = null;
      }
      // no matter how many in "line", the front moves to the next.  if only one in line it moves to null, if two or more initially in line, it moves to the next in "line"
      this.front = this.front.next;
    }
    return removedValue;
  }

  /**
   * Returns the value of the node located at the front of the queue
   * @returns Value of the node located at the front of the queue
   */
  peek(){
    return this.front ? this.front.value : this.front;
  }

  /**
   * indicates whether or not the queue is empty
   * @returns Boolean indicating whether or not the queue is empty
   */
  isEmpty(){
    return this.front === null;
  }

}


module.exports = { Stack, Queue };
