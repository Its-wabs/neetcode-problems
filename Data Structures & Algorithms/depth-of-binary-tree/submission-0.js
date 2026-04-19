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
    maxDepth(root) {
        let curr = root;
        if(curr === null) return 0;

        let left = this.maxDepth(curr.left);
        let right = this.maxDepth(curr.right);

        return Math.max(left,right) +1;
        
        
    }
    
}
