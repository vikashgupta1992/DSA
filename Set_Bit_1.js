/*
Problem Description
You are given two integers A and B.
Set the A-th bit and B-th bit in 0, and return output in decimal Number System.

Note:
The bit positions are 0-indexed, which means that the least significant bit (LSB) has index 0.
*
Example Input
Input 1: A = 3, B = 5
Input 2: A = 4, B = 4

Example Output
Output 1: 40
Output 2: 16
* */

const bitWise = {
    //param A : integer
    //param B : integer
    //return an integer
    solve : function(A, B){
        let num = 0;

        num |= (1 << A);

        // Set the B-th bit
        num |= (1 << B);

        return num;
    }
};

const A = 3
const B = 5
console.log(bitWise.solve(A, B));