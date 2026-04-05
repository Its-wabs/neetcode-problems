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
     * @return {ListNode}
     */
    reverseList(head) {
        let tail =  null;
        let current = head;

        while(current) {
             let nextTemp = current.next;  
        current.next = tail;         
        tail = current;               
        current = nextTemp; 
        }

        return tail;
    }
}
