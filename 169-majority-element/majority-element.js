/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count = 1, ele = nums[0];
    for(let i=1;i<nums.length;i++) {
        if(count <= 0) ele = nums[i];
        if(nums[i] !== ele) count--;
        else count++;
    }
    return ele;
};