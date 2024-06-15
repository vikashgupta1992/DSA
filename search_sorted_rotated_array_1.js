const arr = [11,15,17,19,20,1,3,5,7,9];
const target = 1;

const findMin = () => {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] > arr[right]) left = mid + 1;
        else right = mid;
    }

    return left;
};

const findTarget = (arr, elem, start, end) => {
    while (start < end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] === elem) return mid;
        if (elem < arr[mid]) end = mid;
            else start = mid + 1;
    }

    return -1;
}

const findPos = () => {
    const minTarget = findMin();
    let result = findTarget (arr, target, 0, minTarget -1);
    if (result === -1) {
        result = findTarget (arr, target, minTarget, arr.length - 1);
    }

    return result;
}

console.log(findPos());