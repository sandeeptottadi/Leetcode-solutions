/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    let trustMap = {};
    let trustedByMap = {};
    if(n === 1) return 1;
    for(let i=0;i<trust.length;i++) {
        if(trustMap[trust[i][0]])
            trustMap[trust[i][0]].push(trust[i][1]);
        else 
            trustMap[trust[i][0]] = [trust[i][1]];
        if(trustedByMap[trust[i][1]]) 
            trustedByMap[trust[i][1]].push(trust[i][0]);
        else 
            trustedByMap[trust[i][1]] = [trust[i][0]];
    }
    for(let i=1;i<=n;i++) {
        if(!trustMap[i] && trustedByMap[i] && trustedByMap[i].length === n-1) return i;
    }
    return -1;
};