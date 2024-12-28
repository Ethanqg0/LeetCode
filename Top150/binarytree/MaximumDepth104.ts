/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

/*
    Edge case: root is null, return 0

    To find the maximum depth of the tree, there are many approaches. We will utilize a recursive approach. Notice, trees are inherently recursive structures because each node can be thought of as a root of a smaller binary tree.

    Pseudocode
    if no root, return 0

    return the max of MaxDepth(left) and MaxDepth(right) + 1
    the + 1 is for each level
*/
function maxDepth(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}
