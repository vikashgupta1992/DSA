/**
 * Problem Description
 * Given an array A. You have some integers given in the array B.
 * For the i-th number, find the frequency of B[i] in the array A and return a list containing all the frequencies.
 *
 * Problem Constraints
 * 1 <= |A| <= 105
 * 1 <= |B| <= 105
 * 1 <= A[i] <= 105
 * 1 <= B[i] <= 105
 *
 * Example Input
 * Input 1:
 * A = [1, 2, 1, 1] B = [1, 2]
 * Input 2:
 * A = [2, 5, 9, 2, 8] B = [3, 2]
 *
 * Example Output
 * Output 1: [3, 1]
 * Output 2: [0, 2]
 *
 * Example Explanation
 * For Input 1:
 * The frequency of 1 in the array A is 3.
 * The frequency of 2 in the array A is 1.
 *
 * For Input 2:
 * The frequency of 3 in the array A is 0.
 * The frequency of 2 in the array A is 2.
 */
const distinctElement = {
    //param A : array of integers
    //param B : array of integers
    //return a array of integers
    solve : function(A){
        const set = new Set(A);
        return set.size;
    }
};
const A = [3, 3, 3, 9, 0, 1, 0]
console.log(distinctElement.solve(A))