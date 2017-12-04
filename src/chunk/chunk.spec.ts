import 'jest'
import { chunk } from './chunk'

const arr = Object.freeze([ 1, 2, 3, 4, 5, 6 ])


test('should return empty array', () => {
  expect.assertions(2)
  expect( chunk(arr, 0) ).toEqual([])
  expect( chunk([], 1) ).toEqual([])
})


test('should return chunks with different sizes', () => {
  expect.assertions(7)
  expect( chunk(arr, 1) ).toEqual([ [ 1 ], [ 2 ], [ 3 ], [ 4 ], [ 5 ], [ 6 ] ])
  expect( chunk(arr, 2) ).toEqual([ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ])
  expect( chunk(arr, 3) ).toEqual([ [ 1, 2, 3 ], [ 4, 5, 6 ] ])
  expect( chunk(arr, 4) ).toEqual([ [ 1, 2, 3, 4 ], [ 5, 6 ] ])
  expect( chunk(arr, 5) ).toEqual([ [ 1, 2, 3, 4, 5 ], [ 6 ] ])
  expect( chunk(arr, 6) ).toEqual([ [ 1, 2, 3, 4, 5, 6 ] ])
  expect( chunk(arr, 7) ).toEqual([ [ 1, 2, 3, 4, 5, 6 ] ])
})
