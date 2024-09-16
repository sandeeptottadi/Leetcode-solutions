/**
 * @param {number[]} rungs
 * @param {number} dist
 * @return {number}
 */
var addRungs = function(rungs, dist) {
    let res = 0;
    for(let i=0;i<rungs.length;i++) {
        let distance = i === 0 ? rungs[i] : rungs[i]-rungs[i-1];
        if(distance > dist)
            res += Math.floor((distance-1)/dist);
    }
    return res;
};