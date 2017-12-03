import 'jest'
import { mostFreqChar } from './mostFreqChar'


test('should return empty string', () => {
  expect( mostFreqChar('') ).toBe('')
})


test('should return first character', () => {
  expect( mostFreqChar('abcd1234') ).toBe('a')
})


test('should return most frequently occured character', () => {
  expect( mostFreqChar('tiictaactooe') ).toBe('t')
})
