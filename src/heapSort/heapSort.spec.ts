import { Compare, heapSort } from './heapSort'

test('heap sort', () => {
  expect( heapSort(null, [ 1, 3, 2, 2, 4 ]) ).toEqual([ 1, 2, 2, 3, 4 ])
  expect( heapSort(undefined, [ 3, 5, 1, 4, 2 ]) ).toEqual([ 1, 2, 3, 4, 5 ])

  expect( heapSort(
    (a, b: number) => a > b ? Compare.GREATER : a === b ? Compare.EQUAL : Compare.LESS,
    [ 5, 5, 4, 3, 2, 1 ]
  )).toEqual([ 1, 2, 3, 4, 5, 5 ])

  expect( heapSort()([ 1, 3, 2, 2, 4 ]) ).toEqual([ 1, 2, 2, 3, 4 ])
  expect( heapSort(null)([ 6, 5, 3, 1, 8, 7, 2, 4 ]) ).toEqual([ 1, 2, 3, 4, 5, 6, 7, 8 ])

  expect( heapSort(
    (a, b: {val: number}) => a.val < b.val
      ? Compare.LESS
      : a.val === b.val
        ? Compare.EQUAL
        : Compare.GREATER
    )([ { val: 4 }, { val: 4 }, { val: 1 }, { val: 3 }, { val: 5 }, { val: 2 } ])
  ).toEqual([ { val: 1 }, { val: 2 }, { val: 3 }, { val: 4 }, { val: 4 },  { val: 5 } ])
})
