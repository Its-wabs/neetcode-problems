class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target, index = 0) {

        
        if(nums.length === 0) return -1;

        let mid = Math.floor((nums.length - 1)/2);

        if(target === nums[mid]) {
            return index + mid;
        }

        else if(target > nums[mid]) {
           return this.search(nums.slice(mid + 1),target, index + mid + 1);
        }
        else {
            return this.search(nums.slice(0,mid), target, index);

        }
        
    }
}
