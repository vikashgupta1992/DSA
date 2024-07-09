const progression = {
    //param A : array of integers
    //return an integer
    checkProgression: function (arr) {
        let sortDiff = 0;

        for (let i = 0; i < arr.length - 1; i++) {
            let currentDiff = arr[i + 1] - arr[i];
            if(i > 0 && sortDiff !== currentDiff) {
                return 0;
            } else {
                sortDiff = currentDiff;
            }
        }

        return 1;
    },
    solve : function(A){
        A.sort((a, b) => a - b);
        let result = 0;
        result = this.checkProgression(A);

        if (result) {
            A.sort((a, b) => b - a);
            result = this.checkProgression(A);
        }

        return result;
    }
};

const arr = [3,5,1];
console.log(progression.solve(arr));