/**
 * Problem Description
 * You are given an array of N integers, A1, A2 ,..., AN and an integer B. Return the of count of distinct numbers in all windows of size B.
 * Formally, return an array of size N-B+1 where i'th element in this array contains number of distinct elements in sequence Ai, Ai+1 ,..., Ai+B-1.
 *
 * NOTE: if B > N, return an empty array.
 *
 * Problem Constraints
 * 1 <= N <= 106
 * 1 <= A[i] <= 109
 *
 * Example Input
 * Input 1:
 *  A = [1, 2, 1, 3, 4, 3]
 *  B = 3
 *
 * Input 2:
 * A = [1, 1, 2, 2]
 *  B = 1
 *
 * Example Output
 * Output 1:  [2, 3, 3, 2]
 * Output 2:  [1, 1, 1, 1]
 *
 * Example Explanation
 * Example 1:
 *  A=[1, 2, 1, 3, 4, 3] and B = 3
 *  All windows of size B are
 *  [1, 2, 1]
 *  [2, 1, 3]
 *  [1, 3, 4]
 *  [3, 4, 3]
 *  So, we return an array [2, 3, 3, 2].
 *
 * Example 2:
 * Window size is 1, so the output array is [1, 1, 1, 1].
 *
 */
const  distinctNumbersWindow = {
    solve : function(A, B){
        const n = A.length;
        if (B > n) return []; // Edge case

        const result = [];
        const frequencyMap = new Map();

        // Initialize the first window
        for (let i = 0; i < B; i++) {
            frequencyMap.set(A[i], (frequencyMap.get(A[i]) || 0) + 1);
        }

        // Add the count of distinct numbers in the first window
        result.push(frequencyMap.size);

        // Slide the window over the array
        for (let i = B; i < n; i++) {
            // Remove the element that's sliding out of the window
            const elementToRemove = A[i - B];
            if (frequencyMap.has(elementToRemove)) {
                if (frequencyMap.get(elementToRemove) === 1) {
                    frequencyMap.delete(elementToRemove);
                } else {
                    frequencyMap.set(elementToRemove, frequencyMap.get(elementToRemove) - 1);
                }
            }

            // Add the new element that's entering the window
            const elementToAdd = A[i];
            frequencyMap.set(elementToAdd, (frequencyMap.get(elementToAdd) || 0) + 1);

            // Add the current count of distinct elements to the result
            result.push(frequencyMap.size);
        }

        return result;
    }
};

const A =   [1, 2, 1, 3, 4, 3];
const B = 3;
console.log(distinctNumbersWindow.solve(A, B));