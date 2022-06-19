// Given an array A of N elements. Find the majority element in the array. A majority element in an array A of size N is an element that appears more than N/2 times in the array.

function majorityElement(a, size)
{

    const map = {};
    let majorityElement = -1;
    for (let i = 0; i < a.length; i++) {
        if (map[a[i]]) {
            map[a[i]] += 1;
            if (map[a[i]] > (a.length / 2)) {
                majorityElement = a[i];
            }
        } else {
            map[a[i]] = 1;
        }
    }
    if (size == 1 && majorityElement === -1) {
        majorityElement = a[0];
    }
    return majorityElement;
}