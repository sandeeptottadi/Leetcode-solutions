class Solution:
    def addRungs(self, rungs: List[int], dist: int) -> int:
        count = 0
        # pos = 0
        for i in range(len(rungs)):
            diff = rungs[i] if i == 0 else rungs[i]-rungs[i-1]
            count += (diff-1)//dist
        return count

        #     if i == 0 and rungs[i] > dist:
        #         diff = rungs[i] - dist
        #         count += diff//dist
        #         count += diff % dist
        #         pos += 1
        #     if i < len(rungs)-2:
        #         diff = abs(rungs[i]-rungs[i+1])
        #         if diff > dist:
        #             count += diff // dist
        #             count += diff%dist
        #             pos += 1
        # if pos == len(rungs)-1:
        #     return count


        