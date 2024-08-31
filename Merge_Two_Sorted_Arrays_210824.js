/**
 * Problem Description
 * Given two sorted integer arrays A and B, merge B and A as one sorted array and return it as an output.
 *
 * Note: A linear time complexity is expected and you should avoid use of any library function.
 *
 * Problem Constraints
 * -2×109 <= A[i], B[i] <= 2×109
 * 1 <= |A|, |B| <= 5×104
 *
 * Example Input
 * Input 1:
 * A = [4, 7, 9]
 * B = [2, 11, 19]
 *
 * Input 2:
 * A = [1]
 * B = [2]
 *
 * Example Output
 * Output 1: [2, 4, 7, 9, 11, 19]
 * Output 2: [1, 2]
 *
 * Example Explanation
 * Example 1: Merging A and B produces the output as described above.
 *
 * Example 2:  Merging A and B produces the output as described above.
 *
 */
const mergeTwoSortedArrays = {
    solve : function(A, B){
        let i = 0;
        let j = 0;
        let k = 0;

        let ans = [];

        while (i < A.length && j < B.length) {
            if (A[i] <= B[j]) {
                ans[k] = A[i];
                i++;
                k++;
            } else {
                ans[k] = B[j];
                j++;
                k++;
            }
        }

        while (i < A.length) {
            ans[k] = A[i];
            i++;
            k++;
        }

        while (j < B.length) {
            ans[k] = B[j];
            j++;
            k++;
        }

        return ans;
    }
};

const A = [4, 7, 9]
const B = [2, 11, 19]
console.log(mergeTwoSortedArrays.solve(A, B));