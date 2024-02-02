/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function(low, high) {
    let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let res = [];
    for(let l=0;l<=9;l++) {
        let r = l+1;
        while(r < nums.length) {
            let currNum = getNumber(nums.slice(l, r+1));
            if(currNum <= high && currNum >= low) res.push(currNum);
            else if(currNum > high) break;
            r++;
        }
    }
    function getNumber(list) {
        let num = 0;
        for(let i=0;i<list.length;i++) {
            num = num * 10 + list[i];
        }
        return num;
    }
    return res.sort((a,b) => a-b);
};