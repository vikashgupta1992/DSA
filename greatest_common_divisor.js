/**
 * Problem Description
 * Given 2 non-negative integers A and B, find gcd(A, B)
 *
 * GCD of 2 integers A and B is defined as the greatest integer 'g' such that 'g' is a divisor of both A and B. Both A and B fit in a 32 bit signed integer.
 *
 * Note: DO NOT USE LIBRARY FUNCTIONS.
 *
 * Example Input
 * Input 1:
 * A = 4 B = 6
 *
 * Input 2:
 * A = 6 B = 7
 *
 * Example Output
 * Output 1: 2
 * Output 2: 1
 *
 * Example Explanation
 * Explanation 1: 2 divides both 4 and 6
 * Explanation 2: 1 divides both 6 and 7
 *
 */
const gcd = {
    //param A : string
    //return a strings
    solve: (A, B) => {
        if (B === 0) {
            return A;
        }

        return this.gcd(B, A % B);
    }
};

A = 4
B = 6
let result = gcd.solve(A, B);
console.log(result);