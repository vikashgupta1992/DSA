// const str = "abcgdagfcfaccdg";
/*
* Expected Output
* abcg
* abcgdag
* abcgdagfcfaccdg
* ag
* agfcfaccdg
* accdg
*
* So count is : 6
* */

const str = 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGGGGGGGGGGGGGGGGGGGGGAAAAAAGGGGGGGGGGGGGG';

const getAGPairCount = (str) => {
    let count = 0;
    let ans = 0;
    const mod = 1e9 + 7;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'A') {
            count++;
        }
        if (str[i] === 'G') {
            ans += count;
            ans %= mod;
        }
    }

    console.log(ans);
}

getAGPairCount(str);


