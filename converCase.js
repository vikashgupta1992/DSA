/**
 * Problem Description
 * You are given a character string A having length N, consisting of only lowercase and uppercase latin letters.
 *
 * You have to toggle case of each character of string A. For e.g 'A' is changed to 'a', 'e' is changed to 'E', etc
 *
 * Example Input
 * Input 1: A = "Hello"
 * Input 2: A = "tHiSiSaStRiNg"
 *
 * Example Output
 * Output 1: hELLO
 *
 * Output 2: ThIsIsAsTrInG
 */
const converCase = {
    //param A : string
    //return a strings
    isUpperCase : function (string) {
        return string.charCodeAt(0) >= 65 && string.charCodeAt(0) <= 90;
    },
    solve : function(A){
        let result = "";
        for (let i = 0; i < A.length; i++) {
            if (this.isUpperCase(A[i])) {
                result += A[i].toLowerCase();
            } else {
                result += A[i].toUpperCase();
            }
        }

        return result;
    }
};
const A = "fBXDwDOkWREZjpp";
let result = converCase.solve(A);
console.log(result);