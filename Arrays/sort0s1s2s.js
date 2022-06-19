// Given an array of size N containing only 0s, 1s, and 2s. Sort the array in ascending order.
// Dutch National Flag Algorithm

function sort012(a, n) {
    let low = 0;
    let mid = 0;
    let high = n - 1;
    let temp = 0;
    while (mid <= high) {
        if (a[mid] === 0) {
            temp = a[mid];
            a[mid] = a[low];
            a[low] = temp;
            mid++;
            low++;
        } else if (a[mid] === 1) {
            mid++;
        } else {
            temp = a[mid];
            a[mid] = a[high];
            a[high] = temp;
            high--;
        }
    }
    
    return a;
}