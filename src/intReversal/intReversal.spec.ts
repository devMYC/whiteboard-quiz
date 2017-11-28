import 'jest'
import { reverseInt } from './intReversal'


test('should return 0', () => {
  expect( reverseInt(0) ).toBe(0)
})


test('should return -12', () => {
  expect( reverseInt(-21) ).toBe(-12)
})


test('should return 39', () => {
  expect( reverseInt(930) ).toBe(39)
})
