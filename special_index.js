/*
* Special Index
* */
const a = [4, 3, 2, 7, 6, -2];

const findEvenArr = () => {
    const tempArr = [];
    for (let i = 0; i < a.length; i++) {
        if (i === 0) {
            tempArr.push(a[i]);
        } else if (i % 2 === 0) {
            tempArr.push(a[i] + tempArr[i - 1]);
        } else {
            tempArr.push(tempArr[i - 1])
        }
    }

    return tempArr;
}

const findOddArr = () => {
    const tempArr = [];
    for (let i = 0; i < a.length; i++) {
        if (i === 0) {
            tempArr.push(0);
        } else if (i % 2 !== 0) {
            tempArr.push(a[i] + tempArr[i - 1]);
        } else {
            tempArr.push(tempArr[i - 1])
        }
    }

    return tempArr;
}

const findSpecialIndexes = () => {
    const evenArr = findEvenArr(a);
    const oddArr = findOddArr(a);

    let count = 0;
    if (oddArr[a.length-1] - oddArr[0] === evenArr[a.length-1] - evenArr[0]) {
        count++;
    }
    for (let i = 1; i < evenArr.length; i++) {
        let Se = evenArr[i - 1] + oddArr[a.length-1] - oddArr[i];
        let So = oddArr[i - 1] + evenArr[a.length-1] - evenArr[i];

        if (So === Se) {
            count++;
        }
    }

    return count;
}

findSpecialIndexes();