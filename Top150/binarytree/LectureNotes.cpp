/*
    Binary Tree: Tree structure where each node has at most two children.

    Binary Search Tree: Same tree as binary tree but it requires ordering. Elements on the right are greater, elements on the left
    are less.
        - Susceptible to degenerate search trees
        - If data is inserted in sorted other, we get a degenerate, worst-case tree.    
        - More efficient for searching, insertion, and deletion operations  

    Binary Search Tree: Find() function
        - Similar to binary search in an array. We check the middle and go left or right from there.
        - 42 (root) looking for 81. 42 -> 70 -> 99 -> 81
        - If you look for something that doesnt exist: still the same complexity, but it stimply wont be there
        - The find() function can also have a recursive approach, since every subtree has the same behavior of finding as the root.
*/

class Node {
    public:
        int key;
        Node* left;
        Node* right;
        Node* parent;

        Node(int val) {
            key = val;
            parent = NULL;
            left = NULL;
            right = NULL;
        }

        Node() {
            key = NULL;
            parent = NULL;
            left = NULL;
            right = NULL;
        }
}

class BST {
    private:
        Node* root;

    public:
        // Using a helper function with the same name - good practice? Yes because it helps with recursion.
        Node* find(int val) {
            return find(root, val);
        }

        Node* find(Node* parent, int val) { // helper function
            if (parent == NULL) { // Edge Case
                return NULL;
            }
            if (val == parent->key) { // Base Case
                return parent;
            }
            if (val < parent->key) {
                return find(parent->left, val);
            }
            if (val > parent->key) {
                return find(parent->right, val);
            }

            return NULL;
        }

        Node* insert(int val) {
            return insert(root, val);
        }

        Node* insert(Node* parent, int val) { // helper function
            if (parent->key == val) {  // Edge Case
                return parent;
            }
            
            if (val < parent->key) {
                if (parent->left == NULL) {
                    parent->left = new Node(val);
                    parent->left->parent = parent;
                    return parent->left;
                }
                return insert(parent->left, val);
            }
            if (val > parent->key) {
                if (parent->right == NULL) {
                    parent->right = new Node(val);
                    parent->right->parent = parent;
                    return parent->right;
                }
                return insert(parent->right, val);
            }
        }
}