/*
Check Palindrome using Recursion
*
Problem Description
Write a recursive function that checks whether string A is a palindrome or Not.
Return 1 if the string A is a palindrome, else return 0.

Note: A palindrome is a string that's the same when read forward and backward.
*
Example Input
Input 1: A = "naman"
Input 2: A = "strings"
*
*
Example Output
Output 1: 1
Output 2: 0
*
Example Explanation
Explanation 1: "naman" is a palindomic string, so return 1.
Explanation 2: "strings" is not a palindrome, so return 0.
*
* **/
const fn = {
    //param A : array of integers
    //return an integer
    findPalindrome: function (A, l, r) {
        if (l >= r) return 1;
        if (A[l] !== A[r]) return 0;

        return fn.findPalindrome(A, l + 1, r - 1);
    },
    solve : function(A){
        return fn.findPalindrome(A, 0, A.length - 1);
    }
};

// const A = "naman";
const A = "strings";
const result = fn.solve(A);
console.log(result);
