import { isPalindrome } from './palindrome'


test('empty string is a palindrome', () => {
  expect( isPalindrome('') ).toBeTruthy()
})


test('`hello` is not a palindrome', () => {
  expect( isPalindrome('hello') ).toBeFalsy()
})


test('`taco cat` is a palindrome', () => {
  expect( isPalindrome('taco cat') ).toBeTruthy()
})
