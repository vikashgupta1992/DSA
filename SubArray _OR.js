function sumOfSubarrayOR(A) {
    let N = A.length;
    let total = (N * (N + 1)) / 2;
    let ans = 0;
    const MOD =  Math.pow(10, 9) + 7;

    for (let i = 0; i < 32; i++) {
        let count = 0;
        let zeroVal = 0;

        for (let j = 0; j < N; j++) {
            if ((A[j] & (1 << i)) == 0) {
                count++;
            } else {
                zeroVal += ((count * (count + 1)) / 2);
                count = 0;
            }
        }

        zeroVal += (count * (count + 1) / 2);
        const getDiff = total - zeroVal;
        ans += (getDiff * Math.pow(2, i)) % MOD;
    }

    return ans % MOD;
}

// Example usage
let A = [1, 2, 3, 4, 5];
console.log(sumOfSubarrayOR(A)); // Output: 71