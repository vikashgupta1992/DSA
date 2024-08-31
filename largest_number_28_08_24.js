/**
 * Problem Description
 * Given an array A of non-negative integers, arrange them such that they form the largest number.
 *
 * Note: The result may be very large, so you need to return a string instead of an integer.
 *
 * Problem Constraints
 * 1 <= len(A) <= 100000
 * 0 <= A[i] <= 2*109
 *
 * Example Input
 * Input 1: A = [3, 30, 34, 5, 9]
 * Input 2: A = [2, 3, 9, 0]
 *
 * Example Output
 * Output 1: "9534330"
 * Output 2:  "9320"
 *
 * Example Explanation
 * Explanation 1:
 * Reorder the numbers to [9, 5, 34, 3, 30] to form the largest number.
 *
 * Explanation 2:
 * Reorder the numbers to [9, 3, 2, 0] to form the largest number 9320.
 *
 */
const largetNumber = (A) => {

    A.sort((a,  b) => {
        const ab = a + "" + b;
        const ba = b + "" + a;

        if (ab > ba) {
            return -1;
        } else if (ab < ba) {
            return 1;
        } else {
            return 0;
        }
    })

    return +A.join("") === 0 ? 0 : A.join("");
}

// const A = [3, 30, 34, 5, 9]
const A = [0, 0, 0, 0]
console.log(largetNumber(A))