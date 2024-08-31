/**
 * Problem Description
 * Given an array of integers A, calculate the sum of A [ i ] % A [ j ] for all possible i, j pairs. Return sum % (109 + 7) as an output.
 *
 * Example Input
 * Input 1: A = [1, 2, 3]
 * Input 2: A = [17, 100, 11]
 *
 * Example Output
 * Output 1: 5
 * Output 2: 61
 *
 * Example Explanation
 * Explanation 1: (1 % 1) + (1 % 2) + (1 % 3) + (2 % 1) + (2 % 2) + (2 % 3) + (3 % 1) + (3 % 2) + (3 % 3) = 5
 *
 */
const modSum = {
    //param A : string
    //return a strings
    solve: (A) => {
        const MOD = 1e9 + 7;
        const MAX_VAL = 1000;

        // Frequency array to count occurrences of each element
        let count = Array(MAX_VAL + 1).fill(0);

        // Populate the frequency array
        for (let num of A) {
            count[num]++;
        }

        let totalSum = 0;

        // Calculate the sum of all pairs (i, j)
        for (let x = 1; x <= MAX_VAL; x++) {
            if (count[x] === 0) continue; // Skip if x is not in array

            for (let y = 1; y <= MAX_VAL; y++) {
                if (count[y] === 0) continue; // Skip if y is not in array

                // Calculate the contribution of (x % y) for all such pairs
                let contribution = (x % y) * count[x] * count[y];
                totalSum = (totalSum + contribution) % MOD;
            }
        }

        return totalSum;
    }
};

A = [1, 2, 3];
let result = modSum.solve(A);
console.log(result);