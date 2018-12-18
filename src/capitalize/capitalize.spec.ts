import { capitalize } from './capitalize'


test('should capitalize each word in the string', () => {
  expect.assertions(3)
  expect( capitalize('') ).toBe('')
  expect( capitalize('watch out!!') ).toBe('Watch Out!!')
  expect( capitalize('this is a random string') ).toBe('This Is A Random String')
})
