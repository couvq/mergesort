/* Implementation of a mergesort algorithm for sorting an unsorted list */

const mergesort = (arr) => {
    // base case
    if(arr.length <= 1) return arr; // already sorted with only 0 or 1 items

    let mid = Math.floor(arr.length/2);
    // recursively call mergesort on right and left subarrays
    let left = mergesort(arr.slice(0, mid));
    let right = mergesort(arr.slice(mid));

    return merge(left, right);
}

/* Merge helper function - merges two sorted arrays */
const merge = (arr1, arr2) => {
    let results = [];
    let i = 0;
    let j = 0;

    while(i < arr1.length && j < arr2.length) {
        if(arr1[i] <= arr2[j]) { // push smaller value onto results
            results.push(arr1[i]);
            i++;
        } else { // j value was smaller
            results.push(arr2[j]);
            j++;
        }
    }

    // if arr1 has leftovers, copy over to results
    while(i < arr1.length) {
        results.push(arr1[i]);
        i++;
    }

    // if arr2 has leftovers, copy over to results
    while(j < arr2.length) {
        results.push(arr2[j]);
        j++;
    }
    return results;
}

module.exports = mergesort;