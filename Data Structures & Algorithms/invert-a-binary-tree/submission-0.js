/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {TreeNode}
     */
    invertTree(root) {
        let curr = root;

        if(curr !== null) {
            let temp = curr.left;
            curr.left = curr.right
            curr.right = temp
            this.invertTree(curr.left);
            this.invertTree(curr.right);
        }

        return curr;

    }
}
