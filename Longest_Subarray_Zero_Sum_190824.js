/**
 * Problem Description
 * Given an array A of N integers.
 * Find the length of the longest subarray in the array which sums to zero.
 *
 * If there is no subarray which sums to zero then return 0.
 *
 * Problem Constraints
 * 1 <= N <= 105
 * -109 <= A[i] <= 109
 *
 * Example Input
 * Input 1: A = [1, -2, 1, 2]
 *
 * Input 2: A = [3, 2, -1]
 *
 * Example Output
 * Output 1: 3
 * Output 2: 0
 *
 * Example Explanation
 * Example 1: [1, -2, 1] is the largest subarray which sums up to 0.
 *
 * Example 2: No subarray sums up to 0.
 *
 */
const longestSubarrayZeroSum = {
    solve : function(A){
        const map = new Map();
        let cumulativeSum = 0;
        let maxLength = 0;

        for (let i = 0; i < A.length; i++) {
            cumulativeSum += Number(A[i]);

            // Check if the cumulative sum is zero, meaning subarray from start to i sums to zero
            if (cumulativeSum === 0) {
                maxLength = i + 1;
            }

            // If cumulative sum has been seen before, calculate the subarray length
            if (map.has(cumulativeSum)) {
                const previousIndex = map.get(cumulativeSum);
                maxLength = Math.max(maxLength, i - previousIndex);
            } else {
                // Otherwise, store the current cumulative sum with its index
                map.set(cumulativeSum, i);
            }
        }

        return maxLength;
    }
};

const A = [-16,16,3];
console.log(longestSubarrayZeroSum.solve(A));