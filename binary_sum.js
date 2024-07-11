const binarySum = {
    //param A : string
    //param B : string
    //return a strings
    addBinary : function(A, B){
        let result = '';
        let carry = 0;
        let i = A.length - 1;
        let j = B.length - 1;

        while (i >= 0 || j >= 0) {
            let sum = carry;
            if (i >= 0) sum += A[i--] - '0';
            if (j >= 0) sum += B[j--] - '0';

            result = (sum % 2) + result;
            carry = Math.floor(sum / 2);
        }

        if (carry) result = '1' + result;

        return result;
    }
};

const A = "1010110111001101101000";
const B = "1000011011000000111100110";
// const A = "100";
// const B = "11";

let result = binarySum.addBinary (A, B);
console.log(result);
//1001110001111010101001110