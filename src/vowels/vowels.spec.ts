import { vowels } from './vowels'


test('should return number of vowels in the string', () => {
  expect.assertions(4)
  expect( vowels('') ).toBe(0)
  expect( vowels('aeiou') ).toBe(5)
  expect( vowels('some random text') ).toBe(5)
  expect( vowels('hEllo wOrld') ).toBe(3)
})
