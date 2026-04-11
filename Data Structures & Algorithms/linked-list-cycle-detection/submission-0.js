/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        let curr = head;
        let breadcrumbs = new Map();
        let index = -1;

        while(curr !== null) {
            breadcrumbs.set(curr,(breadcrumbs.get(curr) || 0) + 1);
           if(breadcrumbs.get(curr) > 1) {
            curr.next = null;
            index = 1;
           }
           curr = curr.next;
           
        }
        return  index == 1 ? true : false;
    }
}
