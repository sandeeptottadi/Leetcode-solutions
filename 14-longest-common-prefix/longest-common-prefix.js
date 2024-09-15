/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let res = "";
    let j = 0;
    let prefix = strs[0];
    for(let i=1;i<strs.length;i++) {
        let newStr = strs[i];
        console.log(prefix, newStr)
        let len = Math.min(newStr.length, prefix.length);
        let max = 0;
        for(let j=0;j<len;j++) {
            if(prefix[j] !== newStr[j]) {
                max = j;
                break;
            }
            max++;
        }
        prefix = prefix.substring(0, max);
    }
    return prefix;
};