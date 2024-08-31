/**
 * Problem Description
 * You are given an array A of N elements. Sort the given array in increasing order of number of distinct factors of each element,
 * i.e., element having the least number of factors should be the first to be displayed and the number having highest number of factors should be the last one.
 * If 2 elements have same number of factors, then number with less value should come first.
 *
 * Note: You cannot use any extra space
 *
 * Problem Constraints
 * 1 <= N <= 104
 * 1 <= A[i] <= 104
 *
 * Example Input
 * Input 1: A = [6, 8, 9]
 * Input 2: A = [2, 4, 7]
 *
 * Example Output
 * Output 1: [9, 6, 8]
 * Output 2:  [2, 7, 4]
 *
 * Example Explanation
 * Explanation 1:
 * The number 9 has 3 factors, 6 has 4 factors and 8 has 4 factors.
 *
 * Explanation 2:
 * The number 2 has 2 factors, 7 has 2 factors and 4 has 3 factors.
 *
 */
const getFactors = (N) => {
    let factCount = 0;
    for (let i = 0; i * i <= N; i++) {
        if (N % i === 0) {
            factCount++;
            if (i !== N / i) {
                factCount++;
            }
        }
    }

    return factCount;
}

const factorsSort = (A) => {
    A.sort((a,  b) => {
        const fa = getFactors(a);
        const fb = getFactors(b);

        if (fa === fb) {
           return a - b;
        } else if (fa > fb) return 1;
        else if (fa < fb) return -1;
    })

   return A;
}

// const A = [3, 30, 34, 5, 9]
const A = [6, 8, 9]
console.log(factorsSort(A))