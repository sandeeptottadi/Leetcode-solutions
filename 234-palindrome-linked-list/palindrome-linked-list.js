/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let mid = findMid(head);
    let list1 = head;
    let list2 = mid.next;
    list2 = reverse(list2);
    mid.next = null;
    return palindrome(list1, list2);
};

function findMid(head) {
    let slow = head, fast = head;
    while(fast?.next?.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

function palindrome(list1, list2) {
    while(list1 && list2) {
        if(list1.val !== list2.val) return false;
        list1 = list1.next;
        list2 = list2.next;
    }
    return true;
}

function reverse(head) {
    let curr = head, prev = null;
    while(curr) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
    return prev;
}