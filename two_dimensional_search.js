const arr = [
    [1,2,3,4,5],
    [6,7,8,9,10],
    [10,11,12,13],
    [14,15,16,17],
    [18,19,20,21]
]
const target = 13;

const findTarget = () => {
    let i = 0;
    let j = arr.length - 1;

    while (i < arr.length && j >= 0) {
        if(arr[i][j] === undefined) j = arr[i].length - 1;

        if(arr[i][j] === target) {
            return true;
        }
        if (arr[i][j] > target) j--;
            else i++;
    }

    return false;
}

console.log(findTarget())

