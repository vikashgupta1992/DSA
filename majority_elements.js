/******************************************
 *         Majority Elements              *
 ******************************************/
const numArray = [2,2,3,4,2,2,6,6,6,4,2,8,2,2,2, 3];

const getMajorityElement = (params) => {
    if (params.length === 0) return -1;
    let cand = params[0]
    let voting = 1;
    let count = 0;
    for (let i = 1; i < params.length; i++) {
        if(params[i] === cand) voting++;
            else voting--;

        if(voting === 0) {
            cand = params[i];
            voting = 1;
        }
    }

    for (let numCount in numArray) {
        if (numArray[numCount] === cand) count++;
    }

    if(count > (params.length / 2)) return cand;
      else return -1;
}

console.log(getMajorityElement(numArray));
