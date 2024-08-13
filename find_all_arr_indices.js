/*
All Indices Of Array
*
Problem Description
Given an array of integers A with N elements and a target integer B, the task is to find all the indices at which B occurs in the array.

Note: The problem encourages recursive logic for learning purposes. Although the online judge doesn't enforce recursion, it's recommended to use recursive solutions to align with the question's spirit.
*
Example Input
Input 1: A = [1, 2, 3, 4, 5], B = 1
Input 2: A = [8, 9, 5, 6, 5, 5], B = 5
*
*
Example Output
Output 1: [0]
Output 2: [2, 4, 5]
*
Example Explanation
Explanation 1: The Target, 1 occurs on Index = 0.  So returning [0]
Explanation 2: Here, the target 5 occurs at indexes [2, 4, 5].
*
* **/
const fn = {
    //param A : array of integers
    //return an integer
    findAllIndices: function (A, B, idx, res = []) {
        if(idx === A.length) return 1;
        if (A[idx] === B) res.push(idx);
        fn.findAllIndices(A, B, idx + 1, res);
        return res;
    },
    solve : function(A, B){

        return fn.findAllIndices(A, B, 0);
    }
};

A = [1, 2, 3, 4, 5]
B = 1
// A = [8, 9, 5, 6, 5, 5]
// B = 5

const result = fn.solve(A, B);
console.log(result);
