/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(!s) return 0;
    let res = 1;
    if(s.length === 1) return 1;
    let i = 0, j = 1;
    let dict = {};
    dict[s[0]] = 0;
    while(j < s.length) {
        if(dict[s[j]] !== undefined) {
            if(j-i > res) res = j-i;
            if(dict[s[j]] + 1 > i) i = dict[s[j]]+1;
            dict[s[j]] = j;
        } else
            dict[s[j]] = j;
        j++;
    }
    return j-i > res? j-i : res;
};