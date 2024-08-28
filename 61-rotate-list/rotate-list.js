/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(!head) return null;
    let n = 1;
    let temp = head;
    while(temp.next) {
        temp = temp.next;
        n++;
    }
    if(k > n) {
        k = k%n;
    }
    let newHead = head;
    while(k--) {
        let curr = newHead;
        let prev = null;
        while(curr?.next) {
            prev = curr;
            curr = curr.next;
        }
        if(prev) {
            prev.next = null;
            curr.next = newHead;
        }
        newHead = curr;
    }
    return newHead;
};