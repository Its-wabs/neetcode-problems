class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {

        let output = [0];

        for(let i = 1; i<= n; i++) {
            let half = Math.floor(i/2);
            let oddone = i % 2;
            output[i] = output[half] + oddone;
        }
        return output;
        /*
        // initial simple but effective logic 
        let output = [];

        for(let i =0; i<= n; i++) {
            output.push(Ones(Binary(i)));
        }

        function Binary(num) {
            let b = "";
        while(num > 0) {
            b = String(num % 2 ) + b;
    num = Math.floor(num / 2);
        }
        return b;
        }

        
        function Ones(b) {
            let count = 0;
            for(let i of b) {
                if(i == "1") {
                    count++;
                }
            }
            return count;
        }

        return output;
        */
    }
    
}
