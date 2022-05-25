/* Tests for our mergesort algorithm */
const mergesort = require('./mergesort');

test('array [3, 2, 1] will be sorted to [1, 2, 3]', () => {
    let result = mergesort([3, 2, 1]);
    expect(result).toEqual([1, 2, 3]);
  });