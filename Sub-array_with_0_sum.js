/**
 * Problem Description
 * Given an array of integers A, find and return whether the given array contains a non-empty subarray with a sum equal to 0.
 *
 * If the given array contains a sub-array with sum zero return 1, else return 0.
 *
 *
 * Problem Constraints
 * 1 <= |A| <= 100000
 * -10^9 <= A[i] <= 10^9
 *
 * Example Input
 * Input 1: A = [1, 2, 3, 4, 5]
 * Input 2: A = [4, -1, 1]
 *
 * Example Output
 * Output 1: 0
 * Output 2: 1
 *
 * Example Explanation
 * Explanation 1:
 *  No subarray has sum 0.
 *
 * Explanation 2:
 * he subarray [-1, 1] has sum 0.
 */
const subArraySum = {
    //param A : array of integers
    pfSum: function (A) {
        const freMap = new Map();
        for (let i = 0; i < A.length; i++) {
            if (i > 0) {
                A[i] = A[i] + A[i - 1];
            }

            freMap.set(A[i], (freMap.get(A[i]) || 0) + 1);
        }

        return freMap;
    },
    solve : function(A){
       const pSum = subArraySum.pfSum(A);

       for(const [key, val] of pSum){
           if (val > 1 || key === 0) {
               return 1;
           }
       }

       return 0;
    }
};

const A =   [-1, 1];
console.log(subArraySum.solve(A));