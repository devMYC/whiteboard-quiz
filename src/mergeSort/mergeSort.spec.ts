import { mergeSort } from './mergeSort'

test('should sort array', () => {
  expect(mergeSort([])).toEqual([])
  expect(mergeSort([ 1 ])).toEqual([ 1 ])
  expect(mergeSort([ 1, 1, 1 ])).toEqual([ 1, 1, 1 ])
  expect(mergeSort([ 3, 4, 4, 1, 1, 2 ])).toEqual([ 1, 1, 2, 3, 4, 4 ])
  expect(mergeSort([ 1, 2, 3, 4, 5 ])).toEqual([ 1, 2, 3, 4, 5 ])
  expect(mergeSort([ 5, 4, 3, 2, 1 ])).toEqual([ 1, 2, 3, 4, 5 ])
  expect(mergeSort([ 3, 2, 5, 1, 4 ])).toEqual([ 1, 2, 3, 4, 5 ])
})
