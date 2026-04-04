class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
const dep = new Map();
        let isDup = false;

        for( let i of nums) {
            if(dep.get(i)) {
                isDup = true;
            }
            dep.set(i,1);
        }
        return isDup;


    }
    
}
