/**
 * Problem Description
 * Given an array of integers A and an integer B.
 * Find the total number of subarrays having sum equals to B.
 *
 * Problem Constraints
 * 1 <= length of the array <= 50000
 * -1000 <= A[i] <= 1000
 *
 * Example Input
 * Input 1:
 * A = [1, 0, 1]
 * B = 1
 *
 * Input 2:
 * A = [0, 0, 0]
 * B = 0
 *
 * Example Output
 * Output 1: 4
 * Output 2: 6
 *
 * Example Explanation
 * Example 1:
 * [1], [1, 0], [0, 1] and [1] are four subarrays having sum 1.
 *
 * Example 2:
 * All the possible subarrays having sum 0.
 *
 */
const subarraySumEqualsK = {
    solve : function(A, B){
        const map = new Map();
        let cumulativeSum = 0;
        let count = 0;

        // Initialize the map with 0 cumulative sum to account for subarrays starting from index 0
        map.set(0, 1);

        for (let i = 0; i < A.length; i++) {
            cumulativeSum += A[i];

            // Check if there is a subarray that sums to B
            const diff = cumulativeSum - B;
            if (map.has(diff)) {
                count += map.get(diff);
            }

            // Update the map with the current cumulative sum
            if (map.has(cumulativeSum)) {
                map.set(cumulativeSum, map.get(cumulativeSum) + 1);
            } else {
                map.set(cumulativeSum, 1);
            }
        }

        return count;
    }
};

const A =  [1, 0, 1];
const B = 1;
console.log(subarraySumEqualsK.solve(A, B));