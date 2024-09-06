/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 */
var modifiedList = function(nums, head) {
    let dict = {};
    for(let i=0;i<nums.length;i++)
        dict[nums[i]] = true;
    let curr = head;
    let prev = null;
    while(curr) {
        if(curr === head && dict[curr.val] !== undefined) {
            head = curr.next;
            curr = head;
        } else {
            if(dict[curr.val] != undefined) {
                let temp = curr.next;
                prev.next = temp;
            } else
                prev = curr;
            curr = curr.next;
        }
    }
    return head;
};