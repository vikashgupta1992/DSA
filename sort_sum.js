const sortSum = {
    //param A : array of integers
    //return a long integers
    solve : function(A, B){
        let results = [];

        // Step 1: Compute the XOR of all elements in A
        let totalXOR = 0;
        for (let i = 0; i < A.length; i++) {
            totalXOR ^= A[i];
        }

        // Step 2: For each index in B, compute the result by XORing totalXOR with A[index]
        for (let i = 0; i < B.length; i++) {
            let index = B[i];
            let xorResult = totalXOR ^ A[index];
            results.push(xorResult);
        }

        return results;
    }
};

const A = [1,2,3,4]
const B = [0,1,2];
console.log(sortSum.solve(A, B));