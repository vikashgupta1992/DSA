/*
Merge Sorted Overlapping Intervals
*
Problem Description
You are given a collection of intervals A in a 2-D array format, where each interval is represented by a pair of integers `[start, end]`. The intervals are sorted based on their start values.
Your task is to merge all overlapping intervals and return the resulting set of non-overlapping intervals.
*
Example Input
Input 1: [ [1, 3], [2, 6], [8, 10], [15, 18] ]
Input 2: [ [2, 10], [4, 9], [6, 7] ]

Example Output
Output 1: [ [1, 6], [8, 10], [15, 18] ]
Output 2: [ [2, 10] ]
* */
const merge_Sorted_Overlapping = {
    solve : function(A){
        const N = A[A.length - 1][A[0].length - 1];
        let result = [];
        let l = A[0][0];
        let r = A[0][1];

        for (let i = 1; i < A.length; i++) {
           if (A[i][0] <= r) {
               r = Math.max(r, A[i][1]);
           } else {
                result.push([l, r]);
                l = A[i][0];
                r = A[i][1];
           }
        }

        result.push([l, r]);
        return result;
    }
};

const A = [ [1, 3], [2, 6], [8, 10], [15, 18] ];
console.log(merge_Sorted_Overlapping.solve(A));

