/* Tests for our mergesort algorithm */
const mergesort = require('./mergesort');

test('array [3, 2, 1] will be sorted to [1, 2, 3]', () => {
    let result = mergesort([3, 2, 1]);
    expect(result).toEqual([1, 2, 3]);
  });

  test('array [5, 7, 9, 8, 4, 4, 10] will be sorted to [4, 4, 5, 7, 8, 9, 10]', () => {
    let result = mergesort([5, 7, 9, 8, 4, 4, 10]);
    expect(result).toEqual([4, 4, 5, 7, 8, 9, 10]);
  });