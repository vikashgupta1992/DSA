/**
 * Problem Description
 * You are given an array A of N integers and an integer B.
 * Count the number of pairs (i,j) such that A[i] - A[j] = B and i ≠ j.
 * Since the answer can be very large, return the remainder after dividing the count with 109+7.
 *
 * Problem Constraints
 * 1 <= N <= 105
 * 1 <= A[i] <= 109
 * 1 <= B <= 109
 *
 * Example Input
 * Input 1:
 * A = [3, 5, 1, 2]
 * B = 4
 *
 * Input 2:
 * A = [1, 2, 1, 2]
 * B = 1
 *
 * Example Output
 * Output 1: 1
 * Output 2: 4
 *
 * Example Explanation
 * Example 1:
 * The only pair is (2, 3) which gives difference as 4
 *
 * Example 2:
 * The pair which gives difference as 3 are (2, 1), (4, 1), (2, 3) and (4, 3).
 *
 */
const countPairDifference = {
    solve : function(A, B){
        const MOD = 1000000007;
        const frequencyMap = new Map();
        let count = 0;

        // Count the frequency of each number in the array
        for (const num of A) {
            frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
        }

        // Count the pairs
        for (const num of A) {
            const complement = BigInt(num) - BigInt(B);
            if (frequencyMap.has(complement)) {
                count += frequencyMap.get(complement);
                // If B is 0, we need to subtract 1 to avoid counting (i,i) pair
                if (B === 0) {
                    count--;
                }
            }
        }

        // Return the count modulo 10^9 + 7
        return count % MOD;
    }
};

const A =  [2,1,2,1,2,1,2,1,2];
const B = 1;
console.log(countPairDifference.solve(A, B));