/*
Website Maintenance
*
Scaler Academy, a leading ed-tech platform known for its comprehensive learning programs, is planning to conduct maintenance on its website to enhance user experience and introduce new features.To ensure the maintenance work does not disrupt the scheduled meets of various batches, Scaler Academy aims to schedule this maintenance during the period of no user activity.
Given sorted intervals A on the active hours of multiple learners on the platform and the scheduled meeting by [start, end], where time is denoted by numbers.
Your task is to analyze this data and identify the longest continuous period when no meetings are scheduled before the end time B.
This identified time slot is crucial as it represents the best opportunity to perform website maintenance with the least disruption to the scheduled meets of various batches.
Refer the Example Explanation for better understanding!

Example Input:
Input 1: A = [ [1, 3], [5, 8], [6, 7], [7, 9] ]
B = 12

Input 2: A = [ [0, 5], [2, 7] ]
B = 7

Example Output:
Output 1: 3
Output 2: 0
* */

const maintenance = {
    mergeOverLapping: (A) => {
        let result = [];
        let l = A[0][0];
        let r = A[0][1];

        for (let i = 1; i < A.length; i++) {
            if (A[i][0] <= r) {
                r = Math.max(r, A[i][1]);
            } else {
                result.push([l, r]);
                l = A[i][0];
                r = A[i][1];
            }
        }

        result.push([l, r]);
        return result;
    },
    solve: (A, B) => {
        A = maintenance.mergeOverLapping(A);
        let l = A[0][0];
        let r = A[0][1];

        let maxMainten = Math.abs(l - 0);
        for (let i = 1; i < A.length; i++) {
            const diff = Math.abs(A[i][0] - r);
            maxMainten = Math.max(maxMainten, diff);
            l = A[i][0];
            r = A[i][1];
        }

        maxMainten = Math.max(maxMainten, Math.abs(r - B));
        return maxMainten;
    }
}

const A =[ [1, 3], [5, 8], [6, 7], [7, 9] ];
const B = 12;

console.log(maintenance.solve(A, B));