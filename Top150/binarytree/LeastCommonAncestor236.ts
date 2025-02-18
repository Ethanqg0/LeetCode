class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

/*
    Here, we will utilize a recursive approach with a bottom-up pattern, where we pass information through the call stack. The information we will be passing is the valid root.

    Time Complexity: O(n)

    Pseudocode:
    Edge Case

    Base Case:
    if root === p or q, return p

    Recursive Case:
    let left = lca(left, p, q)
    let right = lca(right, p, q)

    if (left and right) return root, valid case

    else return the non-null value, our valid solution is in this subtree
*/
function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  // Edge Case
  if (root === null) {
    return root;
  }

  // Base Case
  if (root === p || root === q) {
    return root;
  }

  // Recursive Case
  let left = lowestCommonAncestor(root.left, p, q); // 5
  let right = lowestCommonAncestor(root.right, p, q); // null

  if (left && right) {
    return root;
  }

  return left !== null ? left : right; // Return the non-null case
}
