/*
* Row with maximum number of ones
Problem Description
Given a binary sorted matrix A of size N x N. Find the row with the maximum number of 1.

NOTE:

If two rows have the maximum number of 1 then return the row which has a lower index.
Rows are numbered from top to bottom and columns are numbered from left to right.
Assume 0-based indexing.
Assume each row to be sorted by values.
Expected time complexity is O(rows + columns).
* */
const max_one_2d = (arr) => {
    let i = 0
    let j = arr[0].length - 1
    let index = -1;

    while (j >= 0 && i < arr.length) {
        if (arr[i][j] === 1) {
            index = i;
            j--
        } else {
            i++
        }
    }

    return index;
}

// const arr =  [[0, 1, 1],[0, 0, 1],[0, 1, 1]];
const arr = [[0, 0, 0, 0], [0, 0, 0, 1], [0, 0, 1, 1],[0, 1, 1, 1]];
console.log(max_one_2d(arr));
