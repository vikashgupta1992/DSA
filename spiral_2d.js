/*
Problem Description
Given an integer A, generate a square matrix filled with elements from 1 to A2 in spiral order and return the generated square matrix.
*/

const generateSpiral = {
    generate: (num) => {
        let arr = [];
        let rmin = 0;
        let rmax = num - 1;
        let cmin = 0;
        let cmax = num - 1;
        let count = 1;

        for (let i = 0; i < num; i++) {
            arr.push(new Array(A).fill(0));
        }

        while (count <= num * num) {
            //top row
            for (let j = cmin; j <= cmax && count <= num * num; j++) {
                arr[rmin][j] = count;
                count++;
            }
            rmin++;

            //right row
            for (let j = rmin; j <= rmax && count <= num * num; j++) {
                arr[j][cmax] = count;
                count++;
            }
            cmax--;

            //bottom row
            for (let j = cmax; j >= cmin && count <= num * num; j--) {
                arr[rmax][j] = count;
                count++;
            }
            rmax--;

            //left row
            for (let j = rmax; j >= rmin && count <= num * num; j--) {
                arr[j][cmin] = count;
                count++;
            }
            cmin++;
        }

        return arr;
    }
}

const result = generateSpiral.generate(5);
console.log(result);
