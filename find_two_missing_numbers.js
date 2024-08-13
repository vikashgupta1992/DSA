/*
Given an array A of length N where all the elements are distinct and are in the range [1, N+2].
Two numbers from the range [1, N+2] are missing from the array A. Find the two missing numbers.
*
Example Input
Input 1: A = [3, 2, 4]
Input 2: A = [5, 1, 3, 6]
*
Example Output
Output 1: [1, 5]
Output 2: [2, 4]
*
* */

const findTwoMissing = {
    solve : function(A){
        let xorValue = 0;
        // XOR of whole array
        for(let i = 0; i < A.length; i++){
            xorValue ^= A[i];
        }
        // XOR of natural numbers if they are not missing
        for(let i = 1; i <= A.length + 2; i++){
            xorValue ^= i;
        }

        // in xorValue we have XOR of two missing numbers
        let setBitPosition = 0;
        // Check for recenet set bit position
        for(let i = 0; i < 32; i++){
            if((xorValue & (1 << i))){
                setBitPosition = i;
                break;
            }
        }
        // divide int set and unset bit operations for given array which exclude missing numbers
        let setBit = 0;
        let unsetBit = 0;
        for(let i = 0; i < A.length; i++){
            if((A[i] & (1 << setBitPosition)) !== 0){
                setBit ^= A[i];
            }else{
                unsetBit ^= A[i];
            }
        }
        // Perform setbit and unsetbit operations for natual numbers which include missing numbers
        for(let i = 1; i <= A.length + 2; i++){
            if((i & (1 << setBitPosition)) !== 0){
                setBit ^= i;
            }else{
                unsetBit ^= i;
            }
        }

        return [setBit, unsetBit].sort((a,b) => a - b);
    }
};

const A = [5, 1, 3, 6];
console.log(findTwoMissing.solve(A));