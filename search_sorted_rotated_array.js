const arr = [11,15,17,19,20,1,3,5,7,9];
const target = 15;

const findMin = (arr) => {
    let left = 0;
    let right = arr.length - 1;

    while(left < right) {
        if(arr[left] > arr[right]) {
            left++;
        } else {
            right--;
        }
    }

    return left;
}

const findElement = (arr, target, start, end) => {
    let index = -1;
    if (arr[start] === target) {
        index = start
    } else if (arr[end] === target) {
        index = end;
    }

    if (end === start + 1) {
        index = -1;
    }

    if (index === -1 && end !== start + 1) {
        let middlePoint = Math.round((start + end) / 2);
        if  (arr[middlePoint] === target) {
            index = middlePoint;
        } else if (arr[start] < target && arr[middlePoint] > target) {
            index  = findElement (arr, target, start, middlePoint);
        }
    }

    return index;
}

const findPositions = (arr, target, start, end) => {
   return arr[start] <= target && arr[end] >= target;
}

const SearchRotatedAndSorted = (arr, target) => {
    const MinIndex = findMin(arr);
    let result = -1;

    const leftArr = findPositions(arr, target, 0, MinIndex - 1);
    if (leftArr) {
        result = findElement (arr, target, 0, MinIndex - 1);
    }

    const rightArr = findPositions(arr, target, MinIndex, arr.length - 1);
    if (rightArr) {
        result = findElement (arr, target, MinIndex, arr.length - 1);
    }

    return result;
}


console.log(SearchRotatedAndSorted(arr, target));