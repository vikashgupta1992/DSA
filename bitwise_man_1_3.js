/*
Problem Description
Alex and Sam are good friends. Alex is doing a lot of programming these days. He has set a target score of A for himself.
Initially, Alex's score was zero. Alex can double his score by doing a question, or Alex can seek help from Sam for doing questions that will contribute 1 to Alex's score. Alex wants his score to be precisely A. Also, he does not want to take much help from Sam.
Find and return the minimum number of times Alex needs to take help from Sam to achieve a score of A.

Note:
The bit positions are 0-indexed, which means that the least significant bit (LSB) has index 0.
*
Example Input
Input 1: A = 5
Input 2: A = 3

Example Output
Output 1: 2
Output 2: 2

Example Explanation
Explanation 1:
Initial score : 0
Takes help from Sam, score : 1
Alex solves a question, score : 2
Alex solves a question, score : 4
Takes help from Sam, score: 5

Explanation 2:
Initial score : 0
Takes help from Sam, score : 1
Alex solves a question, score : 2
Takes help from Sam, score : 3
* */

const bitWise = {
    //param A : integer
    //param B : integer
    //return an integer
    solve : function(A){
        let count = 0;

        while (A > 0) {
            // Increment count if the least significant bit is 1
            count += A & 1;
            // Right shift the number by 1 bit
            A = A >> 1;
        }

        return count;
    }
};

const A = 11

console.log(bitWise.solve(A));