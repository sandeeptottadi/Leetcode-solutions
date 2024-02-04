/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if(t.length > s.length) return "";
    if(t === s) return t;
    let smallest = "", matched = 0, l = 0;
    let tMap = {};
    for(let i=0;i<t.length;i++) {
        tMap[t[i]] = (tMap[t[i]] ?? 0)+1;
    }
    for(let r=0;r<s.length;r++) {
        if(s[r] in tMap) {
            tMap[s[r]] -= 1;
            if(tMap[s[r]] >= 0) {
                matched++;
            } 
        }
        while(matched === t.length) {
            let subStr = s.substring(l, r+1);
            smallest = subStr.length < smallest.length || smallest === "" ? subStr : smallest;
            if(s[l] in tMap) {
                if(tMap[s[l]] === 0) {
                    matched--;
                }
                tMap[s[l]] += 1;
            }
            l++;
        } 
    }
    return smallest;
};