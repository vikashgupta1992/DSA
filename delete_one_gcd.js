/**
 * Problem Description
 * Given an integer array A of size N. You have to delete one element such that the GCD(Greatest common divisor) of the remaining array is maximum.
 *
 * Find the maximum value of GCD.
 *
 * Example Input
 * Input 1:  A = [12, 15, 18]
 * Input 2: A = [5, 15, 30]
 *
 * Example Output
 * Output 1: 6
 * Output 2: 15
 *
 * Example Explanation
 * Explanation 1:
 *  If you delete 12, gcd will be 3.
 *  If you delete 15, gcd will be 6.
 *  If you delete 18, gcd will 3.
 *  Maximum value of gcd is 6.
 *
 * Explanation 2:
 *  If you delete 5, gcd will be 15.
 *  If you delete 15, gcd will be 5.
 *  If you delete 30, gcd will be 5.
 *  Maximum value of gcd is 15.
 *
 */
const deleteOne = {
    //param A : string
    //return a strings
    gcd: (A, B) => {
        while (B !== 0) {
            let temp = B;
            B = A % B;
            A = temp;
        }
        return A;
    },
    solve: (A) => {
        const N = A.length;

        // Edge case: If array has only one element, GCD of remaining elements is 0
        if (N === 1) return 0;

        // Step 1: Create prefix and suffix GCD arrays
        let prefixGCD = Array(N).fill(0);
        let suffixGCD = Array(N).fill(0);

        prefixGCD[0] = A[0];
        suffixGCD[N - 1] = A[N - 1];

        for (let i = 1; i < N; i++) {
            prefixGCD[i] = deleteOne.gcd(prefixGCD[i - 1], A[i]);
        }

        for (let i = N - 2; i >= 0; i--) {
            suffixGCD[i] = deleteOne.gcd(suffixGCD[i + 1], A[i]);
        }

        // Step 2: Calculate maximum GCD after deleting one element
        let maxGCD = Math.max(suffixGCD[1], prefixGCD[N - 2]);

        for (let i = 1; i < N - 1; i++) {
            let currentGCD = deleteOne.gcd(prefixGCD[i - 1], suffixGCD[i + 1]);
            maxGCD = Math.max(maxGCD, currentGCD);
        }

        return maxGCD;
    }
};

A = [12, 15, 18]
let result = deleteOne.solve(A, B);
console.log(result);