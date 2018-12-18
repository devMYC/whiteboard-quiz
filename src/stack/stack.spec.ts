import Stack from './stack'


test('should return the current stack size', () => {
  expect.assertions(1)
  const stack = new Stack()
  expect( stack.size ).toBe(0)
})


test('should push new entries into the stack', () => {
  expect.assertions(1)
  const stack = new Stack()
  stack.push('A')
  stack.push('B')
  expect( stack.size ).toBe(2)
})


test('should pop entries from the top of the stack', () => {
  expect.assertions(3)
  const stack = new Stack()
  stack.push('A')
  stack.push('B')
  stack.push('C')
  expect( stack.pop() ).toBe('C')
  expect( stack.pop() ).toBe('B')
  expect( stack.size ).toBe(1)
})
