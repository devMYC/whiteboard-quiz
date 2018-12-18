import { spiralMatrix } from './spiralMatrix'


test('should return empty matrix', () => {
  expect( spiralMatrix(0) ).toEqual([])
})


test('should return 1x1 spiral matrix', () => {
  expect( spiralMatrix(1) ).toEqual([ [ 1 ] ])
})


test('should return 2x2 sprial matrix', () => {
  expect( spiralMatrix(2) ).toEqual([ [ 1, 2 ], [ 4, 3 ] ])
})


test('should return 3x3 spiral matrix', () => {
  expect( spiralMatrix(3) ).toEqual([ [ 1, 2, 3 ], [ 8, 9, 4 ], [ 7, 6, 5 ] ])
})


test('should return 4x4 spiral matrix', () => {
  expect( spiralMatrix(4) )
    .toEqual([ [ 1, 2, 3, 4 ], [ 12, 13, 14, 5 ], [ 11, 16, 15, 6 ], [ 10, 9, 8, 7 ] ])
})
