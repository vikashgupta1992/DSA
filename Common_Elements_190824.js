/**
 * Problem Description
 * Given two integer arrays, A and B of size N and M, respectively. Your task is to find all the common elements in both the array.
 *
 * NOTE:
 * Each element in the result should appear as many times as it appears in both arrays.
 * The result can be in any order. *
 *
 * Problem Constraints
 * 1 <= N, M <= 105
 * 1 <= A[i] <= 109
 *
 * Example Input
 * Input 1:
 *  A = [1, 2, 2, 1]
 *  B = [2, 3, 1, 2]
 *
 * Input 2:
 *  A = [2, 1, 4, 10]
 *  B = [3, 6, 2, 10, 10]
 *
 * Example Output
 * Output 1: [1, 2, 2]
 * Output 2: [2, 10]
 *
 * Example Explanation
 * Explanation 1:
 *  Elements (1, 2, 2) appears in both the array. Note 2 appears twice in both the array.
 *
 * Explantion 2:
 *  Elements (2, 10) appears in both the array.
 *
 */
const CommonElement = {
    //param A : array of integers
    solve : function(A, B){
        const frequencyMap = new Map();
        for (const num of A) {
            frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
        }
        const result = [];

        for (let i = 0; i < B.length; i++) {
            if (frequencyMap.has(B[i]) && frequencyMap.get(B[i]) > 0) {
                result.push(B[i]);
                frequencyMap.set(B[i], frequencyMap.get(B[i]) - 1);
            }
        }

        return result
    }
};

// const A =  [2, 1, 4, 10];
// const B =  [3, 6, 2, 10, 10];
const A =  [1, 2, 2, 1];
const B =  [2, 3, 1, 2];
console.log(CommonElement.solve(A, B));