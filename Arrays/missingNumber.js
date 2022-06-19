// Given an array of size N-1 such that it only contains distinct integers in the range of 1 to N. Find the missing element.

function missingNumber(array,n){
    const sumOfN = n * (n + 1) / 2;
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sumOfN - sum;
}