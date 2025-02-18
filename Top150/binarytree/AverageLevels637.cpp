/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */

#include <queue>

class Solution {
public:
    vector<double> averageOfLevels(TreeNode* root) {
        vector<double> averages;
        std::queue<TreeNode*> q;

        if (!root) { return averages; }

        q.push(root);

        while ( !q.empty() ) {
            int levelSize = q.size();
            double sum = 0;

            for (int i = 0; i < levelSize; i++ ) { // for loop to ensure we dont keep going past the level
                TreeNode* node = q.front();
                q.pop();

                sum += node->val;

                if (node->left) {
                    q.push(node->left);
                }
                if (node->right) {
                    q.push(node->right);
                }
            }

            averages.push_back(sum / levelSize);
        }

        return averages;
    }
};