/*
* Problem Description
* Given a string A of size N, find and return the longest palindromic substring in A.
* Substring of string A is A[i...j] where 0 <= i <= j < len(A)
* Palindrome string:
* A string which reads the same backwards. More formally, A is palindrome if reverse(A) = A.
* In case of conflict, return the substring which occurs first ( with the least starting index).
*
* Example Input
* Input 1: A = "aaaabaaa"
* Input 2: A = "abba
*
* Example Output
* Output 1: "aaabaaa"
* Output 2: "abba"
*/

const findLongestPalindromic = {
    expand: function (str, i, j) {
        while(i >= 0 && j < str.length) {
            if (str[i] !== str[j]) {
                break;
            }

            i--;
            j++;
        }

        return j - i - 1;
    },
    solve: function (A) {
        let start = 0;
        let end = 0;
        let highest = 0;
        for (let i = 0; i < A.length; i++) {
            let f1 = this.expand(A, i, i);
            let f2 = this.expand(A, i, i + 1);

            const maxlength = Math.max(f1, f2);

            if (maxlength > (end - start) && highest !== maxlength) {
                highest = maxlength;
                start = i - Math.floor((maxlength - 1) / 2);
                end =  i + Math.floor(maxlength / 2);
            }
        }

        return A.substring(start, end + 1);
    }
}

// const A = "aaaabaaa";"aaaabaaa";
const A = "abbcccbbbcaaccbababcbcabca";
console.log(findLongestPalindromic.solve (A));