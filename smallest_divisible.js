/******************************************
 *      Smalled Divisable Number          *
 ******************************************/
const num = 252;

const getSmallestNumber = (num) => {
    let number = "";
    let i = 9;
    while(i > 1) {
        // If divisable
        if(num % i === 0) {
            num = num / i;
            number = i + number;
        } else {
            i--;
        }
    }

    if(num !== 1) return -1;
    else return number;
}

console.log(getSmallestNumber(num));