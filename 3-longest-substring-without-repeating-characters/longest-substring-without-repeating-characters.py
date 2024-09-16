class Solution(object):
    def lengthOfLongestSubstring(self, s):
        """
        :type s: str
        :rtype: int
        """
        if(not s): return 0
        i = 0
        j = 1
        length = 1
        dict = {}
        dict[s[0]] = 0
        while(j < len(s)):
            if(s[j] in dict):
                if(dict[s[j]] >= i):
                    length = j-i if j-i > length else length
                    i = dict[s[j]]+1
            dict[s[j]] = j
            j += 1
        return length if length > j-i else j-i