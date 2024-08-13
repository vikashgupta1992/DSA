/*
* Problem Description

Given an array of integers A and an integer B, find and return the minimum number of swaps required to bring all the numbers less than or equal to B together.

Note: It is possible to swap any two elements, not necessarily consecutive.
*
Problem Constraints

1 <= length of the array <= 100000
-109 <= A[i], B <= 109
*
*
Example Input

Input 1:

 A = [1, 12, 10, 3, 14, 10, 5]
 B = 8
Input 2:

 A = [5, 17, 100, 11]
 B = 20
 *
 *
Example Output

Output 1: 2
Output 2: 1
*
*
Example Explanation

Explanation 1:
A = [1, 12, 10, 3, 14, 10, 5]
After swapping  12 and 3, A => [1, 3, 10, 12, 14, 10, 5].
After swapping  the first occurence of 10 and 5, A => [1, 3, 5, 12, 14, 10, 10].
Now, all elements less than or equal to 8 are together.

* Explanation 2:
 A = [5, 17, 100, 11]
 After swapping 100 and 11, A => [5, 17, 11, 100].
 Now, all elements less than or equal to 20 are together.

* */

const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;

    return arr;
}
const minSwaps = (arr, B) => {
    let i = 0;
    let step = 0;
    arr = [...new Set(arr)];
    let j = arr.length - 1;
    while (i < j) {
        if (arr[i] <= B && arr[j] <= B) {
            i++;
        }
        if (arr[i] > B && arr[j] <= B) {
            arr = swap(arr, i, j);
            step++;
            i++;
            j--;
        } else if (arr[j] > B) {
            j--;
        } else {
            i++
        }
    }

    return step;
}

const arr = [1, 12, 10, 3, 14, 10, 5];
const B = 8
// const arr = [5, 17, 100, 11];
// const B = 20;
// const arr = [52,7,93,47,68,26,51,44,5,41,88,19,78,38,17,13,24,74,92,5,84,27,48,49,37,59,3,56,79,26,55,60,16,83,63,40,55,9,96,29,7,22,27,74,78,38,11,65,29,52,36,21,94,46,52,47,87,33,87,70];
// //try => [7,52,93,47,68,26,51,44,5,41,88,19,78,38,17,13,24,74,92,5,84,27,48,49,37,59,3,56,79,26,55,60,16,83,63,40,55,9,96,29,7,22,27,74,78,38,11,65,29,52,36,21,94,46,52,47,87,33,87,70];
// const B = 19;
console.log(minSwaps(arr, B));