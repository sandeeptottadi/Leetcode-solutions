/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    let pos_idx = -1, neg_idx = -1;
    let res = [];
    for(let i=0;i<nums.length;i++) {
        if(nums[i] > 0) res[2*(++pos_idx)] = nums[i];
        else res[2*(++neg_idx)+1] = nums[i];
    }
    return res;
};