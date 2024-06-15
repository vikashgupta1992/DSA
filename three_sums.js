/******************************************
 *                Three Sum               *
 ******************************************/
nums = [-1,0,1,2,-1,-4]

const threeSum = function(nums) {
    // Two pointer approach
    nums.sort((a, b) => a -b);
    const matchArr = [];
    for (let i = 0; i < nums.length; i++) {
        if(i === 0 || (nums[i] !== nums[i - 1])) {
            let j = i + 1;
            let k = nums.length - 1;
            let target = nums[i];
            while (j < k) {
                const sumKey = nums[j] + nums[k];
                if (target + sumKey === 0) {
                    matchArr.push([nums[i], nums[j], nums[k]]);
                    // ignore duplicates
                    while (j < k && nums[j] === nums[j + 1]) j++;
                    while (j < k && nums[k] === nums[k - 1]) j--;
                    j++;
                    k--;
                } else if (target < sumKey) {
                    j++;
                } else {
                    k--;
                }
            }
        }
    }

    return matchArr;
};

console.log(threeSum(nums));