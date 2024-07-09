const transform = {
    solve : function(A){
        const trans = [];
        const row = A.length;
        const col = A[0].length;

        for (let i = 0; i < col; i++) {
           const newRow = [];
            for (let j = 0; j < row; j++) {
                newRow.push(A[j][i]);
            }

            trans.push(newRow);
        }

        return trans;
    }
}

const A = [[1, 2],[1, 2],[1, 2]]
// const A = [[1, 2, 3],[4, 5, 6],[7, 8, 9]]
// const A = [[21,62,16,44,55,100,16,86,29],[62,72,85,35,14,1,89,15,73],[42,44,30,56,25,52,61,23,54],[5,35,12,35,55,74,50,50,80],[2,65,65,82,26,36,66,60,1],[18,1,16,91,42,11,72,97,35],[23,57,9,28,13,44,40,47,98]];

//[21 62 42 5 2 18 23 ] [62 72 44 35 65 1 57 ] [16 85 30 12 65 16 9 ] [44 35 56 35 82 91 28 ] [55 14 25 55 26 42 13 ] [100 1 52 74 36 11 44 ] [16 89 61 50 66 72 40 ] [86 15 23 50 60 97 47 ] [29 73 54 80 1 35 98 ]
console.log(transform.solve(A));