/*
* First Missing Integer
*
Problem Description
Given an unsorted integer array, A of size N. Find the first missing positive integer.
Note: Your algorithm should run in O(n) time and use constant space.
*
Problem Constraints
1 <= N <= 1000000
-109 <= A[i] <= 109
*
:::::::Example Input:::::::
Input 1: [1, 2, 0]
Input 2:[3, 4, -1, 1]
Input 3: [-8, -7, -6]
*
:::::::Example Output:::::::
Output 1: 3
Output 2: 2
Output 3: 1
*
:::::::Example Explanation:::::::
Explanation 1: A = [1, 2, 0]
First positive integer missing from the array is 3.
Explanation 2: A = [3, 4, -1, 1]
First positive integer missing from the array is 2.
Explanation 3: A = [-8, -7, -6]
First positive integer missing from the array is 1.
* */

const firstMissingNumber = (A) => {
    A.sort((a, b) => a - b);
    let missingNumber = 1;

    for (let i = 0; i < A.length; i++) {
        if (A[i] > 0 && A[i] === missingNumber) {
            missingNumber++;
        }
    }

    return missingNumber;
}

// const A = [2,3,1,2];
const A = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,20];

console.log(firstMissingNumber (A));
