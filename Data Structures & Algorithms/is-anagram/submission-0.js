class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const frqT = new Map();
        const frqS = new Map();
        for(let char of s.toLowerCase()) {
            frqS.set(char, (frqS.get(char) || 0) + 1);
        }
        for(let char of t.toLowerCase()) {
            frqT.set(char, (frqT.get(char) || 0) + 1);
        }

        let areEq = true;
        const allkeys = new Set([...frqS.keys(),...frqT.keys()]);

        for(let key of allkeys) {
            const countS = frqS.get(key) || 0;
            const countT = frqT.get(key) || 0;
            if(countS !== countT) {
                areEq = false;
            }
        }
        return areEq;

    }
}
