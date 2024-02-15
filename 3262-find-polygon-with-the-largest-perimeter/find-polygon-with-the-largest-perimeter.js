/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    nums.sort((a,b) => a-b);
    let count = 0, res = -1;
    for(let i=0;i<nums.length;i++) {
        if(i < 2) count += nums[i];
        else if(count > nums[i]) {
            count += nums[i];
            if(count > res) res = count;
        } else count += nums[i];
    }
    return res;
};