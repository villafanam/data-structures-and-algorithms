'use strict';

function fizzBuzzTree(tree) {

  const traverse = (node) => {
    // recursive left case
    if (node.left) traverse(node.left);

    // base case
    if((node.value % 3 === 0) && (node.value % 5 === 0))
    {
      node.value = 'FizzBuzz';
    }
    else if (node.value % 3 === 0) {
      node.value = 'Fizz';
    }
    else if (node.value % 5 === 0) {
      node.value = 'Buzz';
    }
    else
    {
      node.value = node.value.toString();
    }

    // recursive right case
    if (node.right) traverse(node.right);

  };
  // get the party started
  traverse(tree.root);

  return tree;
}

module.exports = { fizzBuzzTree };
