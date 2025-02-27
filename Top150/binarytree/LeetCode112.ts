/* Iterative approach
    if (!root) {
        return false;
    }

    const stack: [TreeNode, number][] = [];
    stack.push([root, root.val])

    while (stack.length > 0) {
        const [node, sum] = stack.pop();

        if (sum === targetSum && node.left === null && node.right === null) {
            return true;
        }

        // Add children to stack
        if (node.right) {
            stack.push( [node.right, sum + node.right.val] );
        }
        if (node.left) {
            stack.push( [node.left, sum + node.left.val] );
        }
    }

    return false;
*/

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  // Recursive approach
  if (!root) {
    return false;
  }

  if (root.val === targetSum && root.left === null && root.right === null) {
    return true;
  }

  const newSum = targetSum - root.val;

  return hasPathSum(root.left, newSum) || hasPathSum(root.right, newSum);
}
