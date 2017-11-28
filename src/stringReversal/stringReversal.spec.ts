import 'jest'
import { reverseStr } from './stringReversal'


test('should return empty string', () => {
  expect( reverseStr('') ).toBe('')
})


test('should return reversed string', () => {
  expect( reverseStr('abcd') ).toBe('dcba')
})


test('should also return reversed string', () => {
  expect( reverseStr('randomStr') ).toBe('rtSmodnar')
})
