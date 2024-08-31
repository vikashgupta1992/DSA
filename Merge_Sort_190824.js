/**
 * Problem Description
 * Given an integer array A, sort the array using Merge Sort.
 *
 * Problem Constraints
 * 1 <= |A| <= 105
 * 1 <= A[i] <= 109
 *
 * Example Input
 * Input 1:
 * A = [1, 4, 10, 2, 1, 5]
 *
 * Input 2:
 * A = [3, 7, 1]
 *
 * Example Output
 * Output 1: [1, 1, 2, 4, 5, 10]
 * Output 2: [1, 3, 7]
 *
 */
const mergeSort = {
    mergSortFn: function (array, tempArray, leftStart, mid, rightEnd) {
        let i = leftStart, j = mid + 1, k = leftStart;

        while (i <= mid && j <= rightEnd) {
            if (array[i] <= array[j]) {
                tempArray[k++] = array[i++];
            } else {
                tempArray[k++] = array[j++];
            }
        }

        while (i <= mid) {
            tempArray[k++] = array[i++];
        }

        while (j <= rightEnd) {
            tempArray[k++] = array[j++];
        }

        for (i = leftStart; i <= rightEnd; i++) {
            array[i] = tempArray[i];
        }
    },
    solve : function(A){
        let n = A.length;
        let tempArray = new Array(n);

        for (let currSize = 1; currSize < n; currSize *= 2) {
            for (let leftStart = 0; leftStart < n - 1; leftStart += 2 * currSize) {
                let mid = Math.min(leftStart + currSize - 1, n - 1);
                let rightEnd = Math.min(leftStart + 2 * currSize - 1, n - 1);

                mergeSort.mergSortFn(A, tempArray, leftStart, mid, rightEnd);
            }
        }

        return A;
    }
};

const A = [4, 2, 7, 3, 9, 0];
console.log(mergeSort.solve(A));