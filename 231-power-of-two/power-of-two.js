/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    let l = 0, r = Math.sqrt(n)+1, mid;
    while(l <= r) {
        mid = Math.floor((r+l)/2);
        if(Math.pow(2, mid) === n) return true;
        if(Math.pow(2, mid) > n) r = mid-1;
        else l = mid+1;
    }
    return false;
};