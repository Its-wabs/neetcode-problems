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
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        let curr = root;
        let maxD = 0;
        
        function depth(node) {
            if(node === null) return 0;

        let left = depth(node.left);
        let right = depth(node.right);

        maxD = Math.max(maxD, left + right);

        return Math.max(left,right) + 1;

        }
        depth(curr);
        
        return maxD;

        
    }
}
