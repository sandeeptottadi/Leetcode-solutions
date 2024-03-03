/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if(head.next === null && n === 1) return null;
    let node = findNode(head, n);
    if(node === null) return head.next;
    node.next = node.next.next;
    return head;
};

function findNode(head, n) {
    let r = 1;
    let curr = head;
    let slow = head;
    let prev = null;
    while(curr) {
        if(r > n) {
            prev = slow;
            slow = slow.next;
        }
        r++;
        curr = curr.next;
    }
    return prev;
}