/**
 * Problem Description
 * Given an integer array A, sort the array using Quick Sort.
 *
 * Problem Constraints
 * 1 <= |A| <= 105
 * 1 <= A[i] <= 109
 *
 * Example Input
 * Input 1: A = [1, 4, 10, 2, 1, 5]
 * Input 2: A = [3, 7, 1]
 *
 * Example Output
 * Output 1: [1, 1, 2, 4, 5, 10]
 * Output 2: [1, 3, 7]
 *
 */
const pivotSort = (A, lo, r) => {
    const pivot = A[lo];
    let l = lo + 1;

    while (l <= r) {
        if (A[l] <= pivot) {
            l++;
        } else if (A[r] > pivot) {
            r--;
        } else {
            let temp = A[l];
            A[l] = A[r];
            A[r] = temp;
            l++;
            r--
        }
    }

    A[lo] = A[r];
    A[r] = pivot;

    return r;
}


const quickSortFn = (A, l, h) => {
    if (l >= h) return ;

    let PI = pivotSort(A, l, h);
    quickSortFn(A, l, PI -1);
    quickSortFn(A, PI + 1, h);

    console.log(PI);
}

const quickSort_280824 = (A) => {
    quickSortFn(A, 0, A.length - 1);
    console.log(A);
}


const A =[1, 4, 10, 2, 1, 5]
console.log(quickSort_280824(A))