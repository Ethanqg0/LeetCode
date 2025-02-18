/*
    AVL Tree is a self-balancing binary search tree. The key characteristic is that the height of the left and right subtrees of any node can only differ by one.
    In order to accomplish this, we perform rotations to balance the tree, where we rotate the tree's nodes to the left or right.
    We perform these rotations after inserting or deleting a node from the tree.
    The time complexity of an AVL tree for insertion, deletion, and search is O(log n). Whereas a standard BST has a time complexity of O(n) for the worst case.

    Types of rotations:
    1) Left Rotation: We rotate the tree to the left to balance the tree.
    2) Right Rotation: We rotate the tree to the right to balance the tree.
    3) Left-Right Rotation: We rotate the tree to the left and then to the right to balance the tree.
    4) Right-Left Rotation: We rotate the tree to the right and then to the left to balance the tree.

    Rotations:
        1) Check the height of the left and right subtrees using a recursive height function
        2) B(n) = H(left) - H(right). If B(n) > 1, then we have a left-heavy tree, and if B(n) < -1, then we have a right-heavy tree.
        3) If B(n) > 1 or B(n) < -1, we have an unbalanced tree, and we need to perform rotations to balance the tree.

    Learn the rotations for the AVL tree
*/

function rightRotation() {

}
 