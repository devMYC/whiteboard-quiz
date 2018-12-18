import { bubbleSort } from './bubbleSort'

test('should sort array', () => {
  expect(bubbleSort([])).toEqual([])
  expect(bubbleSort([ 1 ])).toEqual([ 1 ])
  expect(bubbleSort([ 1, 1, 1 ])).toEqual([ 1, 1, 1 ])
  expect(bubbleSort([ 3, 4, 4, 1, 1, 2 ])).toEqual([ 1, 1, 2, 3, 4, 4 ])
  expect(bubbleSort([ 1, 2, 3, 4, 5 ])).toEqual([ 1, 2, 3, 4, 5 ])
  expect(bubbleSort([ 5, 4, 3, 2, 1 ])).toEqual([ 1, 2, 3, 4, 5 ])
  expect(bubbleSort([ 3, 2, 5, 1, 4 ])).toEqual([ 1, 2, 3, 4, 5 ])
})
