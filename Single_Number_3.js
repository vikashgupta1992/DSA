/*
Problem Description
Given an array of positive integers A, two integers appear only once, and all the other integers appear twice.
Find the two integers that appear only once.

Note: Return the two numbers in ascending order.
*

Example Input
Input 1: A = [1, 2, 3, 1, 2, 4]
Input 2: A = [1, 2]
*
Example Output
Output 1: [3, 4]
Output 2: [1, 2]
*
* */
const findMissingNumbers = (A) => {
    let  xorNumber = 0;
    for (let i = 0; i < A.length; i++) {
        xorNumber ^= A[i];
    }

    let pos = 0;
    for (let i = 0; i < 32; i++) {
        if ((xorNumber & (1 << i)) !== 0) {
            pos = i;
            break;
        }
    }

    let s1 =0;
    let s2 =0;

    for (let i = 0; i < A.length; i++) {
        if((A[i] & (1 << pos)) === 0) {
            s1 = s1 ^ A[i];
        } else {
            s2 = s2 ^ A[i];
        }
    }

    return s1 > s2 ? [s2, s1] : [s1, s2];
}

// const A = [1, 2, 3, 1, 2, 4];
// const A = [1, 2];
const A = [186,256,102,377,186,377]
console.log(findMissingNumbers(A));