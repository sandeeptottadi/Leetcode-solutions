/**
 * @param {number[][]} questions
 * @return {number}
 */
var mostPoints = function(questions) {
    let dp = [];
    function recursion(i) {
        if(i in dp) return dp[i];
        if(i >= questions.length) return 0;
        let [points, skip] = questions[i];
        let res = Math.max(points + recursion(i+skip+1), recursion(i+1));
        dp[i] = res;
        return res;
    }
    return recursion(0);
};