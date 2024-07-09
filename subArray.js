/*
* Q - Find all the possible subarray of below array.
*
* arr = [4,2,10,3,12,-2, 15]
*
* As per the logic the Space complexity will be
* T.C. O(N^3)
* S.C - O(N)
* */
// const arr = [4,2,10,3,12,-2, 15];
// const arr = [36,63,63,26,87,28,77,93,7]

const getPossibleCountOfSubArray = (arr) => {
    return arr.length * ((arr.length + 1) / 2);
}

const printSubArray = (arr, si, ei) => {
    let tempArray = [];
    for (let k = si; k <= ei; k++) {
        tempArray.push(arr[k]);
    }

    return tempArray;
}

const findPossibleSubArrays = () => {
    // const possibilities = getPossibleCountOfSubArray(arr);

    let possibleArray = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            // If required elements from i to j. if asks for indexes then it will complete here.
            possibleArray.push(printSubArray(arr, i, j));
        }
    }
    console.log(possibleArray);
}

// findPossibleSubArrays();

const printSubArrayTwo = (arr, si, ei) => {
    let tempArray = [];
    for (let k = si; k <= ei; k++) {
        tempArray.push(arr[k]);
    }

    return tempArray;
}

const arr = [36,63,63,26,87,28,77,93,7]

const findPossibleSubArraysTwo = () => {
    // const possibilities = getPossibleCountOfSubArray(arr);

    let possibleArray = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            // If required elements from i to j. if asks for indexes then it will complete here.
            possibleArray.push([i, j]);
        }
    }

    let response = [];
    for (let i = 0; i < possibleArray.length; i++) {
        let start = possibleArray[i][0];
        let end = possibleArray[i][1];

        if (start === end) {
            response.push([arr[start]]);
        } else {
            const tempArr = [];
            for (let j = start; j <= end; j++) {
                tempArr.push(arr[j]);
            }
            response.push(tempArr);
        }
    }
    console.log(response);
}

findPossibleSubArraysTwo();