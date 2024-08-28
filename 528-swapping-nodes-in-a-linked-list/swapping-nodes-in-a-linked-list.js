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
var swapNodes = function(head, k) {
    let p1 = head, p2 = head;
    let position = 1;
    while(position !== k) {
        p2 = p2?.next;
        position++;
    }
    let firstNode = p2;
    while(p2.next) {
        p2 = p2.next;
        p1 = p1.next;
    }
    let secondNode = p1;
    let firstNodeVal = firstNode.val;
    firstNode.val = secondNode.val;
    secondNode.val = firstNodeVal;
    return head;
};