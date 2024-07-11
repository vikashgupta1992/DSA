/*
* T.C. => O(log10N)
* S.C. => O(1)
* */
function binaryToDecimal(num) {
    let ans = 0;
    let power = 1;
    while (num > 0) {
        let r = num % 10
        num = Math.floor(num / 10);

        ans += (r * power);
        power *= 2;
    }

    return ans;
}

console.log(binaryToDecimal(1101));