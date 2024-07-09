const arr = [36,63,63,26,87,28,77,93,7]

const getTotalSubArrays = (N) => {
    return N * ((N + 1) / 2);
}

const getSubArray = (arr) => {
    const getSubArraysLength = getTotalSubArrays(arr.length);

    let isReset = 0;
    let response = [];
    let actualArr = [...response];
    let i =0;

    let startIndex = arr.length - 1;
    while(i < getSubArraysLength) {
        if (arr.length > 0) {
            const result = arr.pop();
            console.log(result, arr);
            response.push(arr);
        }
        //
        //
        // if (startIndex > 0) {
        //
        // }
        // startIndex--;
        i++;
    }

    console.log(response);
    // console.log(getSubArraysLength);
}

getSubArray(arr)