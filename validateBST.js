// Validate BST
// ​
// You are given a Binary Tree data structure consisting of Binary Tree nodes. Each Binary Tree node has an integer value stored in a property called "value" and two children nodes stored in properties called "left" and "right," respectively. Children nodes can either be Binary Tree nodes themselves or the None (null) value. Write a function that returns a boolean representing whether or not the Binary Tree is a valid BST. A node is said to be a BST node if and only if it satisfies the BST property: its value is strictly greater than the values of every node to its left; its value is less than or equal to the values of every node to its right; and both of its children nodes are either BST nodes themselves or None (null) values.
// ​
// Sample input:
//             10
//           /       \
//         5         15
//       /    \     /   \
//     2      5    13    22
//   /               \
// 1                  14
// Sample output: True

// Every node in the BST has a maximum possible value and a minimum possible value. In other words, the value of any given node in the BST must be strictly smaller than some value (the value of its closest right parent) and must be greater than or equal to some other value (the value of its closest left parent).

// O(n) time | O(d) space

function validateBST(tree) {
  return validateBSTHelper(tree, -Infinity, Infinity);
}

function validateBSTHelper(tree.value, minValue, maxValue) {
  if (tree === null) return true;
  if (tree.value < minValue || tree.value >= maxValue) return false;
  const leftIsValid = validateBSTHelper(tree.left, minValue, tree.value);
  const rightIsValid = validateBSTHelper(tree.right, tree.value, maxValue);
  return leftIsValid && rightIsValid;
}
