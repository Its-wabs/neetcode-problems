class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        if(stones.length == 0) return 0;
        if(stones.length == 1)  return stones[0];

        let sorted = [...stones].sort((a,b) => b - a);
        let stone1 = sorted[0];
        let stone2 = sorted[1];

        let remaining =sorted.slice(2);

        if(stone1 !== stone2) {
            let smash = stone1 - stone2;
            remaining.push(smash);

        }

        return this.lastStoneWeight(remaining);
    }
}
