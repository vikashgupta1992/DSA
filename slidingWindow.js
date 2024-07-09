const slidingWindow = (A, B, C) => {
    try {

        let ans = 0;
        for (let i = 0; i < B; i++) {
            ans = BigInt(ans) + BigInt(A[i]);
        }

        if (A.length === B && BigInt(ans) === BigInt(C)) {
            return 1;
        }

        let si = 1;
        let se = B;

        while (se < A.length) {
            ans = BigInt(ans) - BigInt(A[si - 1]) + BigInt(A[se])

            if (ans === BigInt(C)) {
                return 1;

            }
            si++;
            se++;
        }

        return 0;
    } catch (error) {
        console.log(error);
    }
}

const arr = [6,3,3,6,7,8,7,3,7]
const result = slidingWindow(arr, 2, 10)
// const arr = [4]
// const result = slidingWindow(arr, 1, 4)
console.log(result);