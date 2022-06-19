// Given an array a[] of size N which contains elements from 0 to N-1, you need to find all the elements occurring more than once in the given array.

function duplicates(a, n)
    {
        const map = {};
        const ansArray = [];
        for (let i = 0; i < a.length; i++) {
            if (map[a[i]]) {
                map[a[i]] += 1;
                if (map[a[i]] == 2) {
                    ansArray.push(a[i]);
                }
            } else {
                map[a[i]] = 1;
            }
        }
        function numComparator(a, b) {
            return a - b;
        }
        return ansArray.sort(numComparator);
    }