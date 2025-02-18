// This file is a solution for finding the level with the greatest width in a binary search tree.

#include <queue>
#include <iostream>

class TreeNode {
public:
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
};

/*
    Utilizes queue library: empty(), push(), front(), pop(), size()

    Finds the level with the greatest width and returns that width.
    We utilize a breadth-first search in conjunction with a queue to go level-by-level.

    Pseudocode:
    Edge Cases

    vector results;
    queue q;

    q.push(root)

    while queue is not empty
        levelSize = q.size()
        results.push(levelSize)

        for (int i = 0; i < levelSize; i++) // this ensures we stop at the end of the level
            pop node
                for the popped node, add its left and right nodes to the queue, if they exist
*/
int width(TreeNode* root) {
    if (!root) { return 0; }

    vector<int> results;
    std::queue<TreeNode*> q;
    q.push(root);

    // Iterates through the tree level by level. Performs operations to find the length at each level.
    while (!q.empty()) {
        int levelSize = q.size(); // Number of nodes at the current level
        results.push_back(levelSize);

        // Process each node at the current level
        for (int i = 0; i < levelSize; ++i) {
            TreeNode* node = q.front();
            q.pop();

            if (node->left) {
                q.push(node->left);
            }
            if (node->right) {
                q.push(node->right);
            }
        }
    }


    // Finds the greatest value from the results
    int greatestWidth = 0;

    for (int i = 0; i < results.size(); i++) {
        if (results[i] > greatestWidth) { greatestWidth = results[i]; }
    }

    return greatestWidth;
}

TreeNode* lowestCommonAncestor( root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  // Edge Case
  if (root === null) {
    return root;
  }

  // Base Case
  if (root === p || root === q) {
    return root;
  }

  // Recursive Case
  TreeNode* left = lowestCommonAncestor(root.left, p, q); // 5
  TreeNode* right = lowestCommonAncestor(root.right, p, q); // null

  if (left && right) {
    return root;
  }

  return left !== null ? left : right; // Return the non-null case
}
