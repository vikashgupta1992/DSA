/*
Merge Intervals
*
Problem Description
You have a set of non-overlapping intervals. You are given a new interval [start, end], insert this new interval into the set of intervals (merge if necessary).
You may assume that the intervals were initially sorted according to their start times.
*
Example Input
Input 1: Given intervals [1, 3], [6, 9] insert and merge [2, 5]
Input 2: Given intervals [1, 3], [6, 9] insert and merge [2, 6]

Example Output
Output 1: [ [1, 5], [6, 9] ]
Output 2: [ [1, 9] ]
* */
const mergeOverlapping = (A, B) => {
    let [l, r] = [B[0], B[1]];

    let result = [];
    for (let i = 0; i < A.length; i++) {
        if (l > A[i][1]) {
            result.push([A[i][0], A[i][1]]);
        } else if (A[i][0] > r) {
            result.push([l, r]);
            for (let j = i; j < A.length; j++) {
                result.push([A[j][0], A[j][1]]);
            }
            return result;
        } else {
            l = Math.min(l, A[i][0]);
            r = Math.max(r, A[i][1]);
        }
    }

    result.push([l, r]);
    return result;
}

const A = [[1, 3], [6, 9]];
const B = [2, 5];

console.log(mergeOverlapping(A, B));