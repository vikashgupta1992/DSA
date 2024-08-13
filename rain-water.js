/*
Imagine a histogram where the bars' heights are given by the array A. Each bar is of uniform width, which is 1 unit. When it rains, water will accumulate in the valleys between the bars.
Your task is to calculate the total amount of water that can be trapped in these valleys.

Example:

The Array A = [5, 4, 1, 4, 3, 2, 7] is visualized as below. The total amount of rain water trapped in A is 11.
*
* */

const rainWater = {
    //param A : array of integers
    //return an integer
    trap : function(A){
        let lmax = new Array(A.length).fill(0);
        let rmax = new Array(A.length).fill(0);
        lmax[0] = A[0];
        rmax[A.length - 1] = A.at(-1);

        for (let i = 1; i < A.length; i++) {
            lmax[i] = Math.max(lmax[i - 1], A[i]);
        }

        for (let i = A.length - 2; i >= 0; i--) {
            rmax[i] = Math.max(rmax[i + 1], A[i]);
        }

        let sum = 0;

        for (let i = 0; i < A.length; i++) {
            sum += (Math.min(rmax[i], lmax[i]) - A[i]);
        }

        return sum;
    }
};

const A = [0,1,0,2,1,0,1,3,2,1,2,1];
const result = rainWater.trap(A);