/*
    Range Searching in BST and AVL trees

    Range searching is a common operation that involves searching for all elements within a given range.

    Example: How many elements between 5 and 30? Leverage BST left and right properties to determine the range.

    Pseudocode for range searching in BST:
    range(start, low, high) {
        count = 0

        case 1: start > high
            range(start->left, low, high)

        case 2: start < low
            range(start->right, low, high)

        case 3: start >= low && start <= high // within range
            left = range(start->left, low, high)
            right = range(start->right, low, high)
            count = 1 + left + right

        return count
    }
*/

int rangeSearch(TreeNode* root, int low, int high) {
    if (root == NULL) {
        return 0;
    }

    // If current node's value is greater than high, search in the left subtree
    if (root->val > high) {
        return rangeSearch(root->left, low, high);
    }

    // If current node's value is less than low, search in the right subtree
    if (root->val < low) {
        return rangeSearch(root->right, low, high);
    }

    // If current node's value is within the range, count it and search in both subtrees
    return 1 + rangeSearch(root->left, low, high) + rangeSearch(root->right, low, high);
}
