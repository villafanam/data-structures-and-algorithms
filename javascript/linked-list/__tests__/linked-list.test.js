'use strict';

// Require our linked list implementation
const LinkedList = require('../index');

describe('Linked List', () => {
  it('should instantiate an empty linked list', () => {
    const linked = new LinkedList();

    expect(linked.head).toBeNull();
  });

  it('should insert at beginning of empty list', () => {
    const linked = new LinkedList();
    linked.insert('apple');

    expect(linked.head.value).toEqual('apple');
    expect(linked.head.next).toBeNull();
  });

  it('should insert at beginning of populated list', () => {
    const linked = new LinkedList();
    linked.insert('apple');
    linked.insert('banana');

    expect(linked.head.value).toEqual('banana');
    expect(linked.head.next.value).toEqual('apple');
    expect(linked.head.next.next).toBeNull();
  });

  it('should have the head point to the first node in the linked list', () => {
    const linked = new LinkedList();
    linked.insert('apple');
    linked.insert('banana');

    expect(linked.head.value).toEqual('banana');
    expect(linked.head.next.value).toEqual('apple');
    expect(linked.head.next.next).toBeNull();
  });

  it('should be able to insert multiple nodes into the linked list', () => {
    const linked = new LinkedList();
    linked.insert('apple');
    linked.insert('banana');
    linked.insert('kiwi');

    expect(linked.head.value).toEqual('kiwi');
    expect(linked.head.next.value).toEqual('banana');
    expect(linked.head.next.next.value).toEqual('apple');
    expect(linked.head.next.next.next).toBeNull();
  });


  it('should know when value is included in list', () => {

    const linked = new LinkedList();
    linked.insert('apple');
    linked.insert('banana');

    expect(linked.includes('apple')).toBe(true);
  });

  it('should know when value is not included in list', () => {

    const linked = new LinkedList();
    linked.insert('apple');
    linked.insert('banana');

    expect(linked.includes('cucumber')).toBe(false);
  });


  it('should properly return a collection(string) of all the values that exist in the linked list', () => {
    const linked = new LinkedList();
    linked.insert('apple');
    linked.insert('banana');

    const linkedString = linked.toString();

    expect(linkedString).toEqual('{ banana } -> { apple } -> NULL');
  });

  //----------code challenge 06---------
  it('should successfully add a node to the end of the linked list', () => {
    const linked = new LinkedList();
    linked.insert('apple');
    linked.insert('banana');
    linked.append('kiwi');


    expect(linked.head.value).toEqual('banana');
    expect(linked.head.next.value).toEqual('apple');
    expect(linked.head.next.next.value).toEqual('kiwi');
    expect(linked.head.next.next.next).toBeNull();
  });

});
