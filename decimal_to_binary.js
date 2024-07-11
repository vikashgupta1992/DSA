/*
* T.C. => O(log2N)
* S.C. => O(1)
* */

function binaryToDecimal(num) {
    let ans = 0;
    let power = 1;
    while (num > 0) {
        let r = num % 2
        num = Math.floor(num / 2);

        ans += (r * power);
        power *= 10;
    }

    return ans;
}

console.log(binaryToDecimal(13));