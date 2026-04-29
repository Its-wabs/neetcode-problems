class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {

        let step1 = 1;
        let step2 = 2;

        if(n<= 2) return n;

        for(let i =3; i <= n; i++) {
            let current = step1 + step2;
            step1 = step2;
            step2 = current;

        }
        return step2;
       
    }
}
