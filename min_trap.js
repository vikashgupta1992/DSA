const minTrap = {
    //param A : array of integers
    //return an integer
    getLMax: function (A) {
        let lMax = [A[0]];
        for (let i = 1; i < A.length; i++) {
            lMax.push(Math.max(lMax[i - 1], A[i]))
        }

        return lMax;
    },
    getRMax: function (A) {
        let rMax = [...A];
        let maxVal = A[A.length - 1];
        for (let i = A.length - 1; i >= 0; i--) {
            maxVal = Math.max(maxVal, A[i]);
            rMax[i] = maxVal;
        }

        return rMax;
    },
    compareMin: function (lMax, rMax, A) {
        let result =  0;
        for (let i = 0; i < lMax.length; i++) {
            const min = Math.min(lMax[i], rMax[i]);
            if ((min - A[i]) > 0) {
                result += (min - A[i]);
            }
        }

        return result;
    },
    trap : function(A){
        let lMax = this.getLMax(A);
        let rMax = this.getRMax(A);

        return this.compareMin(lMax, rMax, A);
    }
};

const A = [0,1,0,2,1,0,1,3,2,1,2,1];
console.log(minTrap.trap(A));