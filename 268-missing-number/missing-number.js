/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let total_sum = (nums.length*(nums.length+1)/2);
    let sum = 0;
    for(let i=0;i<nums.length;i++) {
        sum += nums[i];
    }
    return total_sum - sum;
};