/*
Problem Description:
Implement pow(A, B) % C.
In other words, given A, B and C, Find (AB % C).
Note: The remainders on division cannot be negative. In other words, make sure the answer you return is non-negative.
*
Example Input
Input 1: A = 2, B = 3, C = 3
Input 2: A = 3, B = 3, C = 1
*
Example Output
Output 1: 2
Output 2: 0
*
*
Example Explanation
Explanation 1: 23 % 3 = 8 % 3 = 2
Explanation 2: 33 % 1 = 27 % 1 = 0
* */
const getResult = (A, B, C) => {
    if (A === 0n) return 0n; // Base case: any power of 0 is 0
    if (B === 0n) return 1n; // Base case: any number to the power of 0 is 1

    A = ((A % C) + C) % C; // Ensure A is positive and within modulo range

    const posResult = this.getPow(A, B / 2n, C); // Recursive call for A^(B/2)

    if (B % 2n === 0n) {
        // If B is even
        return (posResult * posResult) % C;
    } else {
        // If B is odd
        return (posResult * posResult * A) % C;
    }
}
const powerFunction = (A, B, C) => {
    A = BigInt(A);
    B = BigInt(B);
    C = BigInt(C);

    return parseInt(this.getPow(A, B, C));
};

// const A= -1;
// const B= 1;
// const C= 20;
const A = 71045970;
const B = 41535484;
const C = 64735492;
console.log(powerFunction(A, B, C));