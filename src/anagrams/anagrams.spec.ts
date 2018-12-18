import { areAnagrams } from './anagrams'


test('should tell if the given strings are anagrams', () => {
  expect.assertions(6)
  expect( areAnagrams('abcd', 'dbca') ).toBeTruthy()
  expect( areAnagrams('Hello World', 'WORLD, Hello!') ).toBeTruthy()
  expect( areAnagrams('Cinema', 'IceMan') ).toBeTruthy()
  expect( areAnagrams('abcd', 'aabc') ).toBeFalsy()
  expect( areAnagrams('Three', 'tree!') ).toBeFalsy()
  expect( areAnagrams('Rock N Roll', 'Rock And Roll') ).toBeFalsy()
})
