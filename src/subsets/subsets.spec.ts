import 'jest'
import { subsets } from './subsets'


test('should return only the empty subset', () => {
  expect( subsets([]) ).toEqual([ [] ])
})


test('should return all subsets of [ 1 ]', () => {
  expect( subsets([ 1 ]) ).toEqual([ [], [ 1 ] ])
})


test('should return all subsets of [ 1, 2 ]', () => {
  expect( subsets([ 1, 2 ]) ).toEqual([ [], [ 1 ], [ 2 ], [ 1, 2 ] ])
})


test('should return all subsets of [ 1, 2, 3 ]', () => {
  expect( subsets([ 1, 2, 3 ]) )
    .toEqual([ [], [ 1 ], [ 2 ], [ 1, 2 ], [ 3 ], [ 1, 3 ], [ 2, 3 ], [ 1, 2, 3 ] ])
})
