/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    let curr = head;
    let prev = null;
    let pos = 1;
    while(curr && pos !== left) {
        prev = curr;
        curr = curr.next;
        pos++;
    }
    if(prev === null) {
        return helper(head, left, right);
    }
    let leftPoint = curr;
    let node = helper(leftPoint,left, right);
    prev.next = node;
    return head;
};

function helper(head,left, right) {
    let curr = head;
    let pos = left;
    while(curr && pos !== right) {
        curr = curr.next;
        pos++;
    }
    if(curr) {
        let rightPart = curr?.next;
        curr.next = null;
        let node = reverse(head, rightPart);
        return node;
    }
    return curr;
}

function reverse(head, attachment) {
    let curr = head, prev = null;
    while(curr) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
    let newHead = prev;
    while(prev.next) {
        prev = prev.next;
    }
    prev.next = attachment;
    return newHead;
}