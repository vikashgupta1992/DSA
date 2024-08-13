/*
Problem Description
You are given two integers A and B.
If B-th bit in A is set, make it unset.
If B-th bit in A is unset, leave as it is.
Return the updated A value.

Note:
The bit position is 0-indexed, which means that the least significant bit (LSB) has index 0.

Note:
The bit positions are 0-indexed, which means that the least significant bit (LSB) has index 0.
*
Example Input
Input 1:A = 4, B = 1
Input 2: A = 5, B = 2

Example Output
Output 1: 4
Output 2: 1

Example Explanation
For Input 1:
Given N = 4 which is 100 in binary. The 1-st bit is already unset

For Input 2:
Given N = 5 which is 101 in binary. We unset the 2-nd bit
It becomes 001 which is 1 in Decimal.
* */

const bitWise = {
    //param A : integer
    //param B : integer
    //return an integer
    solve : function(A, B){
        return A & ~(1 << B);
    }
};

const A = 4
const B = 1
console.log(bitWise.solve(A, B));