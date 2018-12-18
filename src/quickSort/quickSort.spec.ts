import { quickSort } from './quickSort'

test('should sort array', () => {
  expect(quickSort([])).toEqual([])
  expect(quickSort([ 1 ])).toEqual([ 1 ])
  expect(quickSort([ 1, 1, 1 ])).toEqual([ 1, 1, 1 ])
  expect(quickSort([ 3, 4, 4, 1, 1, 2 ])).toEqual([ 1, 1, 2, 3, 4, 4 ])
  expect(quickSort([ 1, 2, 3, 4, 5 ])).toEqual([ 1, 2, 3, 4, 5 ])
  expect(quickSort([ 5, 4, 3, 2, 1 ])).toEqual([ 1, 2, 3, 4, 5 ])
  expect(quickSort([ 3, 2, 5, 1, 4 ])).toEqual([ 1, 2, 3, 4, 5 ])
})
