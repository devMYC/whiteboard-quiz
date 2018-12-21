import { selectionSort } from './selectionSort'

test('selection sort', () => {
  expect(selectionSort([])).toEqual([])
  expect(selectionSort([ 1 ])).toEqual([ 1 ])
  expect(selectionSort([ 1, 1, 1 ])).toEqual([ 1, 1, 1 ])
  expect(selectionSort([ 3, 4, 4, 1, 1, 2 ])).toEqual([ 1, 1, 2, 3, 4, 4 ])
  expect(selectionSort([ 1, 2, 3, 4, 5 ])).toEqual([ 1, 2, 3, 4, 5 ])
  expect(selectionSort([ 5, 4, 3, 2, 1 ])).toEqual([ 1, 2, 3, 4, 5 ])
  expect(selectionSort([ 3, 2, 5, 1, 4 ])).toEqual([ 1, 2, 3, 4, 5 ])
})
