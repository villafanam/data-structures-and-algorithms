'use strict';


const { Node, BinaryTree } = require('../trees/index');
const { fizzBuzzTree } = require('./index');

describe('BinaryTree', () => {
  let tree = new BinaryTree();
  tree.root = new Node(10);
  tree.root.left = new Node(5);
  tree.root.right = new Node(15);
  tree.root.left.left = new Node(1);
  tree.root.left.right = new Node(9);
  tree.root.right.right = new Node(17);

  let fizzTree = fizzBuzzTree(tree);

  it('returns new tree as expected', () => {
    expect(fizzTree.root.value).toEqual('Buzz');
    expect(fizzTree.root.right.value).toEqual('FizzBuzz');
    expect(typeof fizzTree.root.left.left.value).toEqual('string');
    expect(fizzTree.root.left.right.value).toEqual('Fizz');
  });
});
