/*
* Question: Given an array of N integers return the length of smallest subarray which contains both maximum and minimum elements of the array.
*
* arr[] = [2 2 6 4 5 1 5 2 6 4 1]
* */
// const arr = [2, 2, 6, 4, 5, 1, 5, 2, 6, 4, 1];
const arr = [814,761,697,483,981];

const getMinMax = (min, max) => {
    for (let i = 1; i < arr.length; i++) {
        min = Math.min(min, arr[i]);
        max = Math.max(max, arr[i]);
    }

    return {min, max};
}

const smallestSubArray = () => {
    let min_idx = -1;
    let max_idx = -1;
    let ans = arr.length;

    const result = getMinMax(arr[0], arr[0]);
    const minVal = result['min'];
    const maxVal = result['max'];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === minVal) {
            min_idx = i;
            if (max_idx !== -1) {
                ans = Math.min(ans, min_idx - max_idx + 1);
            }
        } else if (arr[i] === maxVal) {
            max_idx = i;
            if (min_idx !== -1) {
                ans = Math.min(ans, max_idx - min_idx + 1);
            }
        }
    }

    console.log(ans, min_idx, max_idx);
}

smallestSubArray()