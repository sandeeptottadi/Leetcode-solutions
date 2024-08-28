/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if(!list1 && !list2) return null;
    let head;
    let curr = null;
    while(list1 && list2) {
        if(list1.val <= list2.val) {
            if(!head) {
                head = list1;
                list1 = list1.next;
                curr = head;
            } else {
                curr.next = list1;
                list1 = list1.next;
                curr.next.next = null;
                curr = curr.next;
            }
        } else {
            if(!head) {
                head = list2;
                list2 = list2.next;
                curr = head;
            } else {
                curr.next = list2;
                list2 = list2.next;
                curr.next.next = null;
                curr = curr.next;
            }
        }
    }
    while(list1) {
        if(!head) {
            head = list1;
            list1 = list1.next;
            curr = head;
        } else {
            curr.next = list1;
            list1 = list1.next;
            curr.next.next = null;
            curr = curr.next;
        }
    }
    while(list2) {
        if(!head) {
            head = list2;
            list2 = list2.next;
            curr = head;
        } else {
            curr.next = list2;
            list2 = list2.next;
            curr.next.next = null;
            curr = curr.next;
        }
    }
    return head;
};