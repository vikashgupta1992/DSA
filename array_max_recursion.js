/*
Max of an Array Using Recursion
*
Problem Description
Given an array A of size N, write a recursive function that returns the maximum element of the array.
*
Example Input
Input 1: A = [12, 10, 3, 4, 5]
Input 2: A = [1, 5, 80, 40]
*
*
Example Output
Output 1: 12
Output 2: 80
*
Example Explanation
Explanation 1: The Maximum element of the array A, [12, 10, 3, 4, 5] is 12
Explanation 2: The Maximum element of the array A, [1, 5, 80, 40] is 80
*
* **/
const fn = {
    //param A : array of integers
    //return an integer
    findMax: function (A, idx) {
        if (idx === A.length - 1) return A[idx];
        const rr = fn.findMax(A, idx + 1);
        return Math.max(A[idx], rr);
    },
    getMax : function(A){
        let max = A[0];
        return fn.findMax(A, 0, max);
    }
};

const A = [1, 5, 80, 40];
const result = fn.getMax(A);
console.log(result);
