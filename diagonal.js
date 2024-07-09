const A = [[1,2,3],[4,5,6],[7,8,9]];

const diagonal = () => {
    let M = A.length;
    const result = [];
    let count = 0;
    for (let col = 0; col < A[0].length; col++) {
        let i = 0; let j = col;
        result[count] = [];
        while(i < M) {
            if (j < 0) {
                result[count].push(0);
            } else {
                result[count].push(A[i][j]);
            }

            i++;
            j--;
        }
        count++;
    }

    for (let row = 1; row < A.length; row++) {
        let i = row;
        let j = M - 1;
        let limit = 0;
        result[count] = [];
        while(limit < M) {
            if (i > M - 1) {
                result[count].push(0);
            } else {
                result[count].push(A[i][j]);
            }

            i++;
            limit++;
            j--;
        }
        count++;
    }

    console.log(result);
}

diagonal();