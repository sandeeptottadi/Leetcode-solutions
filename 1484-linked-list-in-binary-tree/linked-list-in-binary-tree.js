/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSubPath = function(head, root) {
    return dfs(head, root, head);
};

function dfs(ptr1, ptr2, curr) {
    if(!curr) return true;
    if(!ptr2) return false;
    if(curr.val === ptr2.val) curr = curr.next;
    else if(ptr1.val === ptr2.val) ptr1 = ptr1.next;
    else curr = ptr1;
    return dfs(ptr1, ptr2.left, curr) || dfs(ptr1, ptr2.right, curr);
}