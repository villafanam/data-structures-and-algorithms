'use strict';

const { BinaryTree, Node } = require('../trees/index');


function breadthFirst(tree)
{
  let results = [];
  let q = [];

  q.push(tree.root);
  results.push(tree.root.value);

  while(q.length !== 0)
  {
    let tempNode = q.shift();

    if(tempNode.left !== null)
    {
      q.push(tempNode.left);
      results.push(tempNode.left.value);

    }

    if(tempNode.right !== null)
    {
      q.push(tempNode.right);
      results.push(tempNode.right.value);
    }
  }

  return results;
}

// let tree = new BinaryTree();
// tree.root = new Node(2);
// tree.root.left = new Node(7);
// tree.root.right = new Node(5);
// tree.root.left.left = new Node(2);
// tree.root.left.right = new Node(6);
// tree.root.right.right = new Node(9);
// tree.root.left.right.left = new Node(5);
// tree.root.left.right.right = new Node(11);
// tree.root.right.right.left = new Node(4);

// console.log(tree);
// console.log(breadthFirst(tree));


module.exports = { breadthFirst };
