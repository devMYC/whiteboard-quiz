import { insertionSort } from './insertionSort'

test('should sort array', () => {
  expect(insertionSort([])).toEqual([])
  expect(insertionSort([ 1 ])).toEqual([ 1 ])
  expect(insertionSort([ 1, 1, 1 ])).toEqual([ 1, 1, 1 ])
  expect(insertionSort([ 3, 4, 4, 1, 1, 2 ])).toEqual([ 1, 1, 2, 3, 4, 4 ])
  expect(insertionSort([ 1, 2, 3, 4, 5 ])).toEqual([ 1, 2, 3, 4, 5 ])
  expect(insertionSort([ 5, 4, 3, 2, 1 ])).toEqual([ 1, 2, 3, 4, 5 ])
  expect(insertionSort([ 3, 2, 5, 1, 4 ])).toEqual([ 1, 2, 3, 4, 5 ])
})
