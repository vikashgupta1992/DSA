/*
Problem Description
Given an array A. For every pair of indices i and j (i != j), find the maximum A[i] & A[j].
*
Example Input
Input 1:- A = [53, 39, 88]
Input 2:- A = [38, 44, 84, 12]
*
Example Output
Output 1:- 37
Output 2:- 36
*
Example Explanation
Explanation 1:- 53 & 39 = 37
                39 & 88 = 0
                53 & 88 = 16
Maximum among all these pairs is 37

Explanation 2:-
Maximum bitwise and among all pairs is (38, 44) = 36
**/

const findMaxPair = (A) => {
    let ans = 0;

    for (let i = 30; i >= 0; i--) {
        let count = 0;

        for (let j = 0; j < A.length; j++) {
            if ((parseInt(A[j]) & (1 << i)) !== 0) {
                count++;
            }
        }

        if (count >= 2) {
            ans |= (1 << i);

            for (let j = 0; j < A.length; j++) {
                if ((parseInt(A[j]) & (1 << i)) == 0) {
                    A[j] = 0;
                }
            }
        }
    }

    return ans;
}

const A =[38, 44, 84, 12]
console.log(findMaxPair(A));