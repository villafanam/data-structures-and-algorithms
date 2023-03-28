'use strict';

const HashTable  = require('../Hash_Table/hashTable');


function tree_intersection(tree1, tree2) {
  let arr = [];
  const table = new HashTable(1024);

  const traverse = (node) => {
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
    table.set(`node${node.value}`, node.value);
  };

  traverse(tree1.root);

  const traverse2 = (node) => {
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
    if (table.has(node.value)) {
      arr.push(node.value);
    }
  };

  traverse2(tree2.root);

  return arr;
}
module.exports = tree_intersection;


