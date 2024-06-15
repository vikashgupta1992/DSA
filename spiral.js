/******************************************
 *                Spiral                  *
 ******************************************/
const SpiralArray = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [17, 18, 19, 20, 21],
    [22, 23, 24, 25, 26],
]

const loadSpiral = (_sa) => {
    let m = _sa.length;
    let n = _sa[0].length;
    let count = 0;
    let rmin = 0;
    let rmax = _sa.length - 1;
    let cmin = 0;
    let cmax = _sa[0].length - 1;

    const result = [];
    while (count < n * m) {
        // Top Boundary
        for (let i = cmin; i <= cmax && count < n * m; i++) {
            result.push(_sa[rmin][i]);
            count++;
        }
        rmin++;

        // Right Boundary
        for (let i = rmin; i <= rmax && count < n * m; i++) {
            result.push(_sa[i][cmax]);
            count++;
        }
        cmax--;

        // Bottom Boundary
        for (let i = cmax; i >= cmin && count < n * m; i--) {
            result.push(_sa[rmax][i]);
            count++;
        }
        rmax--;

        // Left Boundary
        for (let i = rmax; i >= rmin && count < n * m; i--) {
            result.push(_sa[i][cmin]);
            count++;
        }
        cmin++;
    }

    return result;
}

console.log(loadSpiral (SpiralArray));
