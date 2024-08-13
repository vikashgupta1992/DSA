/*
Problem Description
Write a function that takes an integer and returns the number of 1 bits present in its binary representation.

Note:
The bit positions are 0-indexed, which means that the least significant bit (LSB) has index 0.
*
Example Input
Input 1: 11
Input 2: 6

Example Output
Output 1: 3
Output 2: 2
* */

const bitWise = {
    //param A : integer
    //param B : integer
    //return an integer
    solve : function(A){
        let count = 0;
        while (A !== 0) {
            // Increment count if the least significant bit is 1
            count += A & 1;
            // Right shift the number by 1 bit
            A = A >>> 1;
        }
        return count;
    }
};

const A = 11

console.log(bitWise.solve(A));