class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.k = k;
        this.heap = [];
        for(let num of nums) {
            this.add(num);
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        if(this.heap.length < this.k) {
            this.heap.push(val);
            this.bubbleUp(this.heap.length - 1);
        }
        else if( val >  this.heap[0]) {
            this.heap[0] = val;
           this.bubbleDown(0);
        }
        return this.heap[0];

    }
    bubbleUp(index) {
        while(index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
        if( this.heap[index] < this.heap[parentIndex]) {
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
        }
        else {
            break;
        }
        }
        
    }
    bubbleDown(index) {
        while(true) {
            let left = 2 * index + 1
            let right = 2 * index + 2;
            let smallest = index;
            if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
            smallest = left;
        }
        if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
            smallest = right;
        }

        if (smallest !== index) {
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            index = smallest; 
        } else {
            break; 
        }
        }
    }
}
