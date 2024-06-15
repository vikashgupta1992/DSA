function findPositions (arr, elem, firstPos, lastPos) {
    let result = -1;
    let findMiddlePos = Math.round((firstPos + lastPos) / 2);

    if (arr[findMiddlePos] === elem) {
        result = findMiddlePos;
    }

    if(arr[findMiddlePos] < elem && result === -1) {
        firstPos = findMiddlePos + 1;
        result = findPositions(arr, elem, firstPos, lastPos);
    }
    if (arr[findMiddlePos] > elem && result === -1) {
        lastPos = findMiddlePos - 1;
        result = findPositions(arr, elem, firstPos, lastPos);
    }

    return result;
}

const findElement = (arr, elem) => {
    const result = findPositions(arr, elem, 0, arr.length - 1);
    console.log('18', result);
}

findElement([1,2,3,4,5,6,7,8,9,10], 5);