/*
Problem Description
Given a matrix of integers A of size N x M and an integer B.
In the given matrix every row and column is sorted in non-decreasing order. Find and return the position of B in the matrix in the given form:
If A[i][j] = B then return (i * 1009 + j)
If B is not present return -1.

Note 1: Rows are numbered from top to bottom and columns are numbered from left to right.
Note 2: If there are multiple B in A then return the smallest value of i*1009 +j such that A[i][j]=B.
Note 3: Expected time complexity is linear
Note 4: Use 1-based indexing
* */
const searchRowAndColumnSorted = {
    solve: (arr, B) => {
        let M = arr.length - 1;
        let i = 0;
        let j = arr[0].length - 1;
        let sum = 0;
        while(j >= 0 && i <= M) {
            if (arr[i][j] === B) {
                const count = (((i + 1) * 1009) + (j + 1));
                sum = (sum > 0) ? Math.min(sum, count) : count;
                j--;
            }

            if (arr[i][j] > B) {
                j--;
            }

            if (arr[i][j] < B) {
                i++;
            }
        }

        return sum === 0 ? -1 : sum;
    }
}

const arr =  [[1, 2],[3, 3]];
// const arr =  [[1, 3, 5, 8],[2, 4, 6, 8]];
// const arr = [[1,2,3],[4,5,6],[7,8,9]]
console.log(searchRowAndColumnSorted.solve(arr, 3));
// Result => 2019