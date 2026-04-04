class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const noSpace = s.replace(/[^\w]/g, '').toLowerCase();
        const reversed = noSpace.split('').reverse().join('');
        if(noSpace === reversed) {
            return true
        }
        return false;
    }
}
