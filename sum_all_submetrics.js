/*
* Sum of all Submatrices
** Problem Description
Given a 2D Matrix A of dimensions N*N, we need to return the sum of all possible submatrices.

Problem Constraints
1 <= N <=30

0 <= A[i][j] <= 10
*
*Example Input:
    Input 1:
    A = [ [1, 1]
          [1, 1] ]
    Input 2:
    A = [ [1, 2]
          [3, 4] ]


* Example Output:
    Output 1:
    16
    Output 2:
    40
*
* */
const sum_submetrics = {
    //param A : array of array of integers
    //return an integer
    solve : function(A){
        let ans = 0;

        for (let i = 0; i < A.length; i++) {
            for (let j = 0; j < A[0].length; j++) {
                ans += A[i][j] * ((i + 1) * (j + 1)) * ((A.length - i) * (A[0].length - j))
            }
        }

        return ans;
    }
};

const arr = [[2,3,6,7],[2,3,4,5]];
console.log(sum_submetrics.solve(arr));