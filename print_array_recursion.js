/**
Problem Description
You are given an array A. Print the elements of the array using recursion.

NOTE :
You are required to not use any loops, You can create new functions.
Don't change the signature of the function PrintArray.
Print a new empty line after printing the output.
 *
 *
* Example Input
* Input 1 :  A = [6, -2, 5, 3]
* Input 2 : A = [1]
 *
 *
* Example Output
* Output 1 : 6 -2 5 3
* Output 2 : 1
 *
 * */
const print_array_recursion = {
    printArray: (A, idx) => {
        if(idx === -1) return 1;
        result = print_array_recursion.printArray(A, idx - 1);
        process.stdout.write(A[idx] + ' ');
    },
    solve : (A) => {
        print_array_recursion.printArray(A, A.length - 1);
        console.log();
    }
}

print_array_recursion.solve([6, -2, 5, 3]);