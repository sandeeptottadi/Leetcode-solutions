/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kInversePairs = function(n, k) {
    const M = 1000000007;
    let dp = new Array(1001).fill(0).map(() => new Array(1001).fill(0));
    dp[0][0] = 1;

    for (let i = 1; i <= n; i++) {
        for (let j = 0; j <= k; j++) {
            for (let x = 0; x <= Math.min(j, i - 1); x++) {
                if (j - x >= 0) {
                    dp[i][j] = (dp[i][j] + dp[i - 1][j - x]) % M;
                }
            }
        }
    }

    return dp[n][k];
};
// 3! = 3*2*1 = 6

// [1, 2, 3] -> 0
// [1, 3, 2] -> 1
// [2, 1, 3] -> 1
// [2, 3, 1] -> 2
// [3, 1, 2] -> 2
// [3, 2, 1] -> 2


// [3, 4, 1, 2]
// [3, 4, 1, 2]