/**
 * Problem Description
 * Given an array of integers A and an integer B, find and return the number of pairs in A whose sum is divisible by B.
 *
 * Since the answer may be large, return the answer modulo (109 + 7).
 *
 * Note: Ensure to handle integer overflow when performing the calculations.
 *
 * Example Input
 * Input 1: A = [1, 2, 3, 4, 5]
 *  B = 2
 *
 * Input 2: A = [5, 17, 100, 11]
 *  B = 28
 *
 * Example Output
 * Output 1: 4
 * Output 2: 1
 *
 * Example Explanation
 * Explanation 1:
 *  All pairs which are divisible by 2 are (1,3), (1,5), (2,4), (3,5).
 *  So total 4 pairs.
 *  
 * Explanation 2:
 *  There is only one pair which is divisible by 28 is (17, 11)
 */
const divisibleByM = {
    //param A : string
    //return a strings
    solve: (A, B) => {
        const MOD = 1e9 + 7;

        let remainderCount = Array(B).fill(0);
        let pairCount = 0;

        for (let i = 0; i < A.length; i++) {
            const remainder = A[i] % B;
            remainderCount[remainder]++;
        }

        pairCount += (remainderCount[0] * (remainderCount[0] - 1)) / 2;

        for (let i = 1; i <= Math.floor(B / 2); i++) {
            if (i === B - i) {
                // Case when i is exactly half of B, so remainder i pairs with itself
                pairCount += (remainderCount[i] * (remainderCount[i] - 1)) / 2;
            } else {
                pairCount += remainderCount[i] * remainderCount[B - i];
            }
        }

        return pairCount % MOD;
    }
};

A = [1, 2, 3, 4, 5]
B = 2
let result = divisibleByM.solve(A, B);
console.log(result);