class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
    
    for(let left = 0; left <= nums.length -1; left++) {
        for(let right = left +1; right <= nums.length -1; right++) {
            const sum = nums[left] + nums[right];

        if(sum === target) {
            return [left,right];
        }
       

        }
        
    }
    return [];
    }
}
