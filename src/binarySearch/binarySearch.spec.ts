import { binarySearch } from './binarySearch'

test('binary search', () => {
  expect(binarySearch([], 1)).toBe(-1)
  expect(binarySearch([ 10 ], 7)).toBe(-1)
  expect(binarySearch([ 10 ], 10)).toBe(0)
  expect(binarySearch([ 0, 1, 3, 5, 6, 9, 10, 15 ], 9)).toBe(5)
  expect(binarySearch([ 1, 50, 100 ], 3)).toBe(-1)
})
